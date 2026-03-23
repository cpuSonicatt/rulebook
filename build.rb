require "erb"
require "json"
require "redcarpet"

class Game
    attr_accessor :id, :pretty, :icon, :colour
    def initialize(id, pretty, icon, colour)
        @id = id
        @pretty = pretty
        @icon = icon
        @colour = colour
        @rc = Redcarpet::Markdown.new(Style, tables: true)
        if id == "mahjong"
            # mahjong has some special cases that require an override to the usual styling
            @rc = Redcarpet::Markdown.new(Mahjong, tables: true)
        end
    end

    def make_page()
        puts "building [#{id}]"
        render = @rc.render(File.read("out/games/#{id}/rules.md"))
        template = ERB.new(File.read("templates/game.erb"))
        File.open("out/games/#{id}/index.html", "w") do |f|
            f.write(template.result(binding))
        end
    end
end

class Style < Redcarpet::Render::HTML

    @@indent = /~ /
    def to_indent(t)
        %_<p class='indent'>#{t.gsub(@@indent, "")}</p>_
    end

    @@center = /!center: /
    def paragraph(text)
        text.gsub!("♥", "<span class='r'>♥</span>")
        text.gsub!("♦", "<span class='r'>♦</span>")

        case text
        when @@note then to_callout(text, @@note, "note", "Note")
        when @@score then to_callout(text, @@score, "score", "Score")
        when @@rank then to_callout(text, @@rank, "rank", "Cards rank (from low to high)")
        when @@example then to_callout(text, @@example, "c-example", "Example")
        when @@tip then to_callout(text, @@tip, "tip", "Tip")
        when @@indent then to_indent(text)
        when @@center then "<p class='text-center mb-4'>#{text.gsub(@@center, "")}</p>"
        else "<p>#{text}</p>"
        end
    end

    @@note = /!note: / # blue
    @@score = /!score: / # red
    @@rank = /!rank: / # purple
    @@example = /!example: / # yellow
    @@tip = /!tip: / # green
    def to_callout(t, reg, type, pretty)
        %_
        <div class="callout #{type}">
            <p><b>#{pretty}</b>: #{t.gsub(reg, "")}</p>
        </div>
        _
    end

    @@hf = /hf: /
    def image(link, title, alt_text)
        case title
        when @@hf then "<img class='w-100 mx-auto mb-3' src='#{link}' alt='#{alt_text}' title='#{title.gsub(@@hf, "")}'>"
        else "<img src='#{link}' alt='#{alt_text}' title='#{title}'>"
        end
    end

    def header(text, level)
        "<h#{level}>#{text}</h#{level}>#{level == 2 ? "<hr>" : ""}"
    end

    def table(header, body)
        body.gsub!("♥", "<span class='r'>♥</span>")
        body.gsub!("♦", "<span class='r'>♦</span>")
        %_
        <table class="table">
            #{header}
            #{body}
        </table>
        _
    end
end

class Mahjong < Style
    def table(_, body)
        %_
        <table class="table mb-5">
            <th class='col-1'>#</th><th class='col-9'>Name</th><th class='col-2'>Points</th>
            #{body}
        </table>
        _
    end

    @@hf = /hf: /
    def image(link, title, alt_text)
        case title
        when @@hf then "<div class='row align-items-center my-3'><img class='w-75 mx-auto mb-3' src='#{link}' alt='#{alt_text}' title='#{title.gsub(@@hf, "")}'></div>"
        else "<img src='#{link}' alt='#{alt_text}' title='#{title}'>"
        end
    end
end

def categories(games)
    categories = {}
    games.map { |game|
        c = game["category"]
        categories[c] = c.gsub("_", " ").gsub("and", "&").upcase
    }
    return categories
end

def games()
    games = []
    Dir.each_child("out/games/") do |f|
        g = JSON.parse(File.read("out/games/#{f}/meta.json"))
        g["id"] = f
        games.push(g)
    end
    return games
end

# write home page
games = games()
categories = categories(games)

home_template = ERB.new(File.read("templates/home.erb"))
File.open("out/index.html", "w") do |f|
    f.write(home_template.result(binding))
end

# write games
rc = Redcarpet::Markdown.new(Style, extensions = {})

root = {"light-pink" => [],
    "pink" => [],
    "dark-pink" => [],
    "light-red" => [],
    "red" => [],
    "dark-red" => [],
    "light-orange" => [],
    "orange" => [],
    "dark-orange" => [],
    "light-yellow" => [],
    "yellow" => [],
    "light-green" => [],
    "green" => [],
    "dark-green" => [],
    "light-teal" => [],
    "teal" => [],
    "dark-teal" => [],
    "light-cyan" => [],
    "cyan" => [],
    "dark-cyan" => [],
    "light-blue" => [],
    "blue" => [],
    "dark-blue" => [],
    "light-indigo" => [],
    "indigo" => [],
    "dark-indigo" => [],
    "light-purple" => [],
    "purple" => [],
    "dark-purple" => []
}

games.each do |g|
    root[g["colour"]].push(g["name"])
    Game.new(g["id"], g["name"], g["icon"], g["colour"]).make_page
end

puts "available colours: #{root.select {|k, v| v.empty?}.keys}"