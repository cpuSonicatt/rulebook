require "json"

JSON.parse(File.read("yaku.json")).each do |y|
    puts %_
    **#{y["name"]}** - #{y["points"]}
    ![](./resources/yaku/#{y["img"]}.png "hf: #{y["name"]}")
    _
end
