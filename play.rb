require "json"

games = []
Dir.each_child("games/") do |f|
    g = JSON.parse(File.read("games/#{f}/meta.json"))
    g.delete("id")
    File.open("games/#{f}/meta.json", "w") do |w|
        w.write(JSON.pretty_generate(g))
    end
end