require "erb"
require "json"
require "redcarpet"
require "htmlbeautifier"

class Game
    attr_accessor :id, :pretty, :icon, :colour, :subtext
    def initialize(id, pretty, icon, subtext, colour, accent)
        @id = id
        @pretty = pretty
        @icon = icon
        @subtext = subtext
        @colour = colour
        @accent = accent
        @rc = Redcarpet::Markdown.new(Style, tables: true)
        if id == "mahjong"
            @rc = Redcarpet::Markdown.new(Mahjong, tables: true)
        end
    end

    def make_page()
        puts "building [#{id}]"
        render = @rc.render(File.read("out/games/#{id}/rules.md"))
        render.gsub!("♥", "<span class=\"r\">♥</span>")
        render.gsub!("♦", "<span class=\"r\">♦</span>")

        template = ERB.new(File.read("templates/game.erb"))
        File.open("out/games/#{id}/index.html", "w") do |f|
            r = template.result(binding)
            f.write(HtmlBeautifier.beautify(r, indent: "    ") + "\n")
        end
    end
end

class Style < Redcarpet::Render::HTML

    @@indent = /~ /
    @@center = /!center: /
    def paragraph(text)
        case text
        when @@note then to_callout(text, @@note, "note", "Note")
        when @@score then to_callout(text, @@score, "score", "Score")
        when @@rank then to_callout(text, @@rank, "rank", "Cards rank (from low to high)")
        when @@example then to_callout(text, @@example, "example", "Example")
        when @@tip then to_callout(text, @@tip, "tip", "Tip")
        when @@indent then "<p class=\"indent\">#{text.gsub(@@indent, "")}</p>"
        when @@center then "<p class=\"text-center mb-4\">#{text.gsub(@@center, "")}</p>"
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
</div>_
    end

    @@hf = /hf: /
    def image(link, title, alt_text)
        case title
        when @@hf then "<img class=\"w-100 mx-auto mb-3\" src=\"#{link}\" alt=\"#{alt_text}\" title=\"#{title.gsub(@@hf, "")}\">"
        else "<img src=\"#{link}\" alt=\"#{alt_text}\" title=\"#{title}\">"
        end
    end

    def header(text, level)
        "<h#{level}>#{text}</h#{level}>#{level == 2 ? "<hr>" : ""}"
    end

    def table(header, body)
        %_
<table class="table">
<tbody>#{header}</tbody>
<tbody>#{body}</tbody>
</table>_
    end
end

# There are a lot of tables in the Mahjong page, and the width of each column is inconsistent across each table. This
# override ensures a consistent width.
class Mahjong < Style
    def table(_, body)
        %_
<table class="table mb-5">
<tbody><tr><th scope="rowgroup" class="col-1">#</th><th scope="rowgroup" class="col-9">Name</th><th scope="rowgroup" class="col-2">Points</th></tr>
#{body}</tbody>
</table>_
    end
end

def categories(games)
    categories = {}
    games.map { |game|
        c = game["category"]
        categories[c] = c.gsub("_", " ").gsub("and", "&amp;").upcase
    }
    return categories
end

def games()
    games = []
    Dir.each_child("out/games/") do |f|
        g = JSON.parse(File.read("out/games/#{f}/meta.json"))
        g["id"] = f
        g["subtext"] = [g["type"], g["players"] + " player" + (g["players"] == "1" ? "" : "s")].join(" • ")
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
rc = Redcarpet::Markdown.new(Style)

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
    colour = g["colour"]
    accent = ""

    case
    when colour.include?("dark")
        accent = colour.sub("dark", "darker")
    when colour.include?("light")
        accent = colour.sub("light", "lighter")
    else
        accent = "accent-#{colour}"
    end

    Game.new(g["id"], g["name"], g["icon"], g["subtext"], colour, accent).make_page
end

puts "available colours: #{root.select {|k, v| v.empty?}.keys}"