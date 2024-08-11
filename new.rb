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
    end

    def make_page()
        rc = Redcarpet::Markdown.new(HTMLWithCallouts, tables: true)
        render = rc.render(File.read("games/#{id}/rules.md"))
        template = ERB.new(File.read("templates/game.erb"))
        File.open("games/#{id}/index.html", "w") do |f|
            f.write(template.result(binding))
        end
    end
end

class HTMLWithCallouts < Redcarpet::Render::HTML

    @@note = /!note: /
    def to_note(t)
        %{
        <div class="callout note">
            <p><b>Note</b>: #{t.gsub(@@note, "")}</p>
        </div>
        }
    end

    @@score = /!score: /
    def to_score(t)
        %{
        <div class="callout score">
            <p><b>Score</b>: #{t.gsub(@@score, "")}</p>
        </div>
        }
    end

    @@rank = /!rank: /
    def to_rank(t)
        %{
        <div class="callout rank">
            <p><b>Card ranks (low to high)</b>: #{t.gsub(@@rank, "")}</p>
        </div>
        }
    end

    @@example = /!example: /
    def to_example(t)
        %{
        <div class="callout c-example">
            <p><b>Example</b>: #{t.gsub(@@example, "")}</p>
        </div>
        }
    end

    @@indent = /~ /
    def to_indent(t)
        %{<p class='indent'>#{t.gsub(@@indent, "")}</p>}
    end

    def paragraph(text)
        case text
        when @@note then to_note(text)
        when @@score then to_score(text)
        when @@rank then to_rank(text)
        when @@example then to_example(text)
        when @@indent then to_indent(text)
        else "<p>#{text}</p>"
        end
    end

    def header(text, level)
        "<h#{level}>#{text}</h#{level}>#{level == 2 ? "<hr>" : ""}"
    end

    def table(header, body)
        %{
        <table class="table">
            #{header}
            #{body}
        </table>
        }
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
    JSON.parse(File.read("games.json"))
end

def heart(flav)
    "<i class='mx-2 twa twa-lg twa-#{flav}-heart'></i>"
end

def made_with()
    [
        # love
        "love",
        "luv",
        "loooooooooooooove",
        "&lt;3",
        heart("sparkling"),
        heart("red"),
        heart("orange"),
        heart("yellow"),
        heart("green"),
        heart("blue"),
        heart("purple"),
        heart("white"),
        heart("black"),
        heart("brown"),
        heart("anatomical"),
        ":heart:",
        ".-.. --- ...- .",
        "����",
        "6C 6F 76 65",

        # programming
        "${RANDOM_FOOTER_PHRASE}",
        "1337 hackzor skillz",
        "/* TODO: Add more phrases */",
        "love'); DROP TABLE Students;--",
        "tabs, not spaces",
        "spaces, not tabs",
        "/* eslint-disable-next-line */",
        "01101100011011110111011001100101",
        "bad programming",
        "rm -rf /",
        "commits directly to main",
        "poor commit messages",
        "System.out.println(\"love\")",
        "console.log(\"love\")",
        "puts \"love\"",
        (3..15).map(&:to_s).to_a.sample + " compile errors",

        # video games
        "motherlode",
        "redstone",
        "sv_cheats 1",
        "john madden john madden john madden john madden",
        "aeiouaeiouaeiou",
        "/gamemode 1",
        "/give @a diamond_block 64",
        "🡹 🡹 🡻 🡻 🡸 🡺 🡸 🡺 <span class='mx-2'><kbd>B</kbd> <kbd>A</kbd> <kbd>START</kbd></span>",
        "E X T E N D",
        "\"BOY!\"",
        "\"Hello, Gordon!\"",
        "an 18-carat run of bad luck",

        # board/card games
        "a Get Out of Jail Free card",
        "Free Parking money",
        "nat 1s",
        "nat 20s",
        "en passant",
        "the Blue-Eyes White Dragon",
        "the Five Lights",
        "the Thirteen Wonders",
        "a Royal Flush",
        "pegging",

        # music
        "power, pleasure, and pain",
        "money, money, money",
        "all the small things",
        "images and words",
        "scenes from a memory",
        "the sunshine of your love",
        "warm wet circles",
        "the ecstasy of gold",
        "tubular bells",
        "hysteria",
        "moving pictures",
        "miracle shopping",
        "the man machine",
        "giant steps",
        "99 red balloons",
        "a kiss from a rose",
        "breakfast in america",
        "a little bit of Monica in my life",
        "a little bit of Erica by my side",
        "a little bit of Rita's all i need",
        "a little bit of Tina's what i see",
        "a little bit of Sandra in the sun",
        "a little bit of Mary all night long",
        "a little bit of Jessica, here i am",

        # other
        "lots of swearing",
        "aaaaaaaaaa",
        "confusion",
        "bad ideas",
        "cute cats",
        "cute dogs",
        "_______",
        "HELP, I'M STUCK IN A FOOTER MESSAGE FACTORY!",
        "impending doom",
        "relevant and topical jokes",
        "Unregistered Hypercam 2",
        "www.BANDICAM.com",
        "a WinRAR license",
        "ur mum lol",
        "urrmmm...",
        "no added sugar",
        "no artificial colours",

        # special
        "<a class='mx-2' href='https://youtu.be/dQw4w9WgXcQ'>dQw4w9WgXcQ</a>",
        "trans rights <i class'mx-2 twa-lg twa-transgender-flag'></i>",
        "rainbows <i class='mx-2 twa-lg twa-rainbow-flag'></i>"
    ].sample
end

# write home page
games = games()
categories = categories(games)
made_with = made_with()

home_template = ERB.new(File.read("templates/home.erb"))
File.open("index.html", "w") do |f|
    f.write(home_template.result(binding))
end

rc = Redcarpet::Markdown.new(HTMLWithCallouts, extensions = {})

games.each do |g|
    Game.new(g["link"], g["name"], g["icon"], g["colour"]).make_page
end

