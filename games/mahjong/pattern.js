const categories = [
    {
        "name": "1. Trivial",
        "patterns": [
            {"id": "1.1", "name": "All Runs", "desc": "Runs only", "points": "5"},
            {"id": "1.2", "name": "Concealed Hand", "desc": "No melded sets", "points": "5"},
            {"id": "1.3", "name": "No Terminals", "desc": "Middle tiles only", "points": "5"}
        ]
    },
    {
        "name": "2. One-suit",
        "patterns": [
            {"id": "2.1.1", "name": "Mixed One-suit", "desc": "Tiles in a single suit, with Honours", "points": "40"},
            {"id": "2.1.2", "name": "Pure One-suit", "desc": "Tiles in a single suit, without Honours", "points": "80"},
            {"id": "2.2", "name": "Nine Gates", "desc": "A \"1112345678999\" in a single suit, and another tile in the same suit", "points": "480"}
        ]
    },
    {
        "name": "3. Honour",
        "patterns": [
            {"id": "3.1", "name": "Value Honour", "desc": "A triplet/quad of your own Wind or Dragons", "points": "10 per set"},
            {"id": "3.2.1", "name": "Small Three Dragons", "desc": "Two triplets/quads and one pair of Dragons", "points": "40"},
            {"id": "3.2.2", "name": "Big Three Dragons", "desc": "Three triplets/quads of Dragons", "points": "130"},
            {"id": "3.3.1", "name": "Small Three Winds", "desc": "Two triplets/quads and one pair of Winds", "points": "30"},
            {"id": "3.3.2", "name": "Big Three Winds", "desc": "Three triplets/quads of Winds", "points": "120"},
            {"id": "3.3.3", "name": "Small Four Winds", "desc": "Three triplets/quads and one pair of Winds", "points": "320"},
            {"id": "3.3.4", "name": "Big Four Winds", "desc": "Four triplets/quads of Winds", "points": "400"},
            {"id": "3.4", "name": "All Honours", "desc": "Honour tiles only", "points": "320"}
        ]
    },
    {
        "name": "4. Triplet/Quad",
        "patterns": [
            {"id": "4.1", "name": "All Triplets", "desc": "Four triplets/quads only", "points": "30"},
            {"id": "4.2.1", "name": "Two Concealed Triplets", "desc": "Two concealed triplets/quads", "points": "5"},
            {"id": "4.2.2", "name": "Three Concealed Triplets", "desc": "Three concealed triplets/quads", "points": "30"},
            {"id": "4.2.3", "name": "Four Concealed Triplets", "desc": "Four concealed triplets/quads", "points": "125"},
            {"id": "4.3.1", "name": "One Quad", "desc": "One concealed/medled quad", "points": "5"},
            {"id": "4.3.2", "name": "Two Quads", "desc": "Two concealed/medled quads", "points": "20"},
            {"id": "4.3.3", "name": "Three Quads", "desc": "Three concealed/medled quads", "points": "120"},
            {"id": "4.3.4", "name": "Four Quads", "desc": "Four concealed/medled quads", "points": "480"}
        ]
    },
    {
        "name": "5. Identical",
        "patterns": [
            {"id": "5.1.1", "name": "Two Identical Runs", "desc": "Two runs in the same suit, of the same numbers", "points": "10"},
            {"id": "5.1.2", "name": "Double Two Identical Runs", "desc": "Two runs in the same suit, of the same numbers, twice", "points": "60"},
            {"id": "5.1.3", "name": "Three Identical Runs", "desc": "Three runs in the same suit, of the same numbers", "points": "120"},
            {"id": "5.1.4", "name": "Four Identical Runs", "desc": "Four runs in the same suit, of the same numbers", "points": "480"}
        ]
    },
    {
        "name": "6. Similar",
        "patterns": [
            {"id": "6.1", "name": "Three Similar Runs", "desc": "Three runs of the same number, in all three suits", "points": "35"},
            {"id": "6.2.1", "name": "Small Three Similar Triplets", "desc": "Two triplets/quads of the same number in two suits, and a pair of the same number of the third suit", "points": "30"},
            {"id": "6.2.2", "name": "Big Three Similar Triplets", "desc": "Three triplets/quads of the same number in three suits", "points": "120"}
        ]
    },
    {
        "name": "7. Consecutive",
        "patterns": [
            {"id": "7.1", "name": "Nine-tile Straight", "desc": "A \"123-456-789\" in the same suit", "points": "40"},
            {"id": "7.2.1", "name": "Three Consecutive Triplets", "desc": "Three triplets/quads of consecutive numbers in the same suit", "points": "100"},
            {"id": "7.2.2", "name": "Four Consecutive Triplets", "desc": "Four triplets/quads of consecutive numbers in the same suit", "points": "200"}
        ]
    },
    {
        "name": "8. Terminal",
        "patterns": [
            {"id": "8.1.1", "name": "Mixed Branching Terminals", "desc": "All sets contain Terminals and Honours", "points": "40"},
            {"id": "8.1.2", "name": "Pure Branching Terminals", "desc": "All sets contain Terminals", "points": "50"},
            {"id": "8.1.3", "name": "Mixed Rooted Terminals", "desc": "All sets contain only Terminals and Honours", "points": "100"},
            {"id": "8.1.4", "name": "Pure Rooted Terminals", "desc": "All sets contain only Terminals", "points": "400"}
        ]
    },
    {
        "name": "9. Incidental",
        "patterns": [
            {"id": "9.1.1", "name": "Final Draw", "desc": "Winning by self-draw on the last tile", "points": "10"},
            {"id": "9.1.2", "name": "Final Discard", "desc": "Winning by discard on the last tile", "points": "10"},
            {"id": "9.2", "name": "Win on Quad", "desc": "Winning by self-draw on a supplement tile (from playing a quad)", "points": "10"},
            {"id": "9.3", "name": "Robbing a Quad", "desc": "Winning by robbing another player's triplet-to-quad promotion", "points": "10"},
            {"id": "9.4.1", "name": "Blessing of Heaven", "desc": "East winning on the first draw without a concealed quad", "points": "155"},
            {"id": "9.4.2", "name": "Blessing of Earth", "desc": "Non-East winning on East's first discard without a concealed quad", "points": "155"}
        ]
    },
    {
        "name": "10. Irregular",
        "id": "irregulars",
        "patterns": [
            {"id": "10.1", "name": "Thirteen Wonders", "desc": "All 13 terminal and honour tiles, plus an additional terminal/honour", "points": "160"},
            {"id": "10.2", "name": "Seven Pairs", "desc": "Pairs only", "points": "30"}
        ]
    }
]

for (let category of categories) {
    let id = ""
    $("#pattern").append(`
        <h3 ${category.id !== undefined ? `id=${category.id}` : ""}>${category.name}</h3>
        <table class="table align-middle mb-5">
        <thead>
            <tr>
                <th class="col-1">#</th>
                <th class="col-9">Name</th>
                <th class="col-2">Points</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            ${category.patterns.map((p) => {
                let split = true
                p.id.substring(0,3) !== id ? id = p.id.substring(0,3) : split = false
                return `<tr class="${split && "table-group-divider"}"}>
                    <th>${p.id}</th>
                    <td><b>${p.name}</b><br>${p.desc}</td>
                    <td>${p.points}</td>
                </tr>`
            }).join(" ")}
        </tbody>
        </table>
    `)
}