require "csv"

table = CSV.parse(File.read("games.csv"), headers: true)

puts table.by_col[1].uniq
