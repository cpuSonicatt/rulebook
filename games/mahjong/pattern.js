const categories = [
    {
        "name": "1. Trivial",
        "patterns": [
            {"id": "1.1", "name": "All Runs", "desc": "Runs only", "points": "5", "ex": "345c 123p 678p 234b 22w"},
            {"id": "1.2", "name": "Concealed Hand", "desc": "No melded sets", "points": "5"},
            {"id": "1.3", "name": "No Terminals", "desc": "Middle tiles only", "points": "5", "ex": "345c 333p 456p 888b 22b"}
        ]
    },
    {
        "name": "2. One-suit",
        "patterns": [
            {"id": "2.1.1", "name": "Mixed One-suit", "desc": "Tiles in a single suit, with Honours", "points": "40", "ex": "123567888c 333w 22c"},
            {"id": "2.1.2", "name": "Pure One-suit", "desc": "Tiles in a single suit, without Honours", "points": "80", "ex": "123567888999c 22c"},
            {"id": "2.2", "name": "Nine Gates", "desc": "A \"1112345678999\" in a single suit, and another tile in the same suit", "points": "480", "ex": "11123456789994p"}
        ]
    },
    {
        "name": "3. Honour",
        "patterns": [
            {"id": "3.1", "name": "Value Honour", "desc": "A triplet/quad of your own Wind or Dragons", "points": "10 per set", "ex": "11? 222w"},
            {"id": "3.2.1", "name": "Small Three Dragons", "desc": "Two triplets/quads and one pair of Dragons", "points": "40", "ex": "6? 333d 111d 22d"},
            {"id": "3.2.2", "name": "Big Three Dragons", "desc": "Three triplets/quads of Dragons", "points": "130", "ex": "5? 333d 111d 222d"},
            {"id": "3.3.1", "name": "Small Three Winds", "desc": "Two triplets/quads and one pair of Winds", "points": "30", "ex": "6? 333w 111w 22w"},
            {"id": "3.3.2", "name": "Big Three Winds", "desc": "Three triplets/quads of Winds", "points": "120", "ex": "5? 333w 111w 222w"},
            {"id": "3.3.3", "name": "Small Four Winds", "desc": "Three triplets/quads and one pair of Winds", "points": "320", "ex": "3? 444w 333w 111w 22w"},
            {"id": "3.3.4", "name": "Big Four Winds", "desc": "Four triplets/quads of Winds", "points": "400", "ex": "2? 444w 333w 111w 222w"},
            {"id": "3.4", "name": "All Honours", "desc": "Honour tiles only", "points": "320", "ex": "111d 222d 111w 333w 33d"}
        ]
    },
    {
        "name": "4. Triplet/Quad",
        "patterns": [
            {"id": "4.1", "name": "All Triplets", "desc": "Four triplets/quads only", "points": "30", "ex": "222c 555p 888p 333b 22d"},
            {"id": "4.2.1", "name": "Two Concealed Triplets", "desc": "Two concealed triplets/quads", "points": "5"},
            {"id": "4.2.2", "name": "Three Concealed Triplets", "desc": "Three concealed triplets/quads", "points": "30"},
            {"id": "4.2.3", "name": "Four Concealed Triplets", "desc": "Four concealed triplets/quads", "points": "125"},
            {"id": "4.3.1", "name": "One Quad", "desc": "One concealed/medled quad", "points": "5", "ex": "9? 3333b 2?"},
            {"id": "4.3.2", "name": "Two Quads", "desc": "Two concealed/medled quads", "points": "20", "ex": "6? 8888p 3333b 2?"},
            {"id": "4.3.3", "name": "Three Quads", "desc": "Three concealed/medled quads", "points": "120", "ex": "3? 5555p 8888p 3333b 2?"},
            {"id": "4.3.4", "name": "Four Quads", "desc": "Four concealed/medled quads", "points": "480", "ex": "2222c 5555p 8888p 3333b 2?"}
        ]
    },
    {
        "name": "5. Identical",
        "patterns": [
            {"id": "5.1.1", "name": "Two Identical Runs", "desc": "Two runs in the same suit, of the same numbers", "points": "10", "ex": "6? 456456p 2?"},
            {"id": "5.1.2", "name": "Double Two Identical Runs", "desc": "Two runs in the same suit, of the same numbers, twice", "points": "60", "ex": "456456p 345345b 2?"},
            {"id": "5.1.3", "name": "Three Identical Runs", "desc": "Three runs in the same suit, of the same numbers", "points": "120", "ex": "3? 456456456p 2?"},
            {"id": "5.1.4", "name": "Four Identical Runs", "desc": "Four runs in the same suit, of the same numbers", "points": "480", "ex": "4564566456456p 2?"}
        ]
    },
    {
        "name": "6. Similar",
        "patterns": [
            {"id": "6.1", "name": "Three Similar Runs", "desc": "Three runs of the same number, in all three suits", "points": "35", "ex": "3? 567c 567p 567b 2?"},
            {"id": "6.2.1", "name": "Small Three Similar Triplets", "desc": "Two triplets/quads of the same number in two suits, and a pair of the same number in the third suit", "points": "30", "ex": "6? 444c 444p 44b"},
            {"id": "6.2.2", "name": "Big Three Similar Triplets", "desc": "Three triplets/quads of the same number in three suits", "points": "120", "ex": "3? 444c 444p 444b 2?"}
        ]
    },
    {
        "name": "7. Consecutive",
        "patterns": [
            {"id": "7.1", "name": "Nine-tile Straight", "desc": "A \"123-456-789\" in the same suit", "points": "40", "ex": "3? 123456789c 2?"},
            {"id": "7.2.1", "name": "Three Consecutive Triplets", "desc": "Three triplets/quads of consecutive numbers in the same suit", "points": "100", "ex": "3? 333444555c 2?"},
            {"id": "7.2.2", "name": "Four Consecutive Triplets", "desc": "Four triplets/quads of consecutive numbers in the same suit", "points": "200", "ex": "333444555666c 2?"}
        ]
    },
    {
        "name": "8. Terminal",
        "patterns": [
            {"id": "8.1.1", "name": "Mixed Branching Terminals", "desc": "All sets contain Terminals and Honours", "points": "40", "ex": "123789c 999p 123b 22w"},
            {"id": "8.1.2", "name": "Pure Branching Terminals", "desc": "All sets contain Terminals", "points": "50", "ex": "123789c 999p 123b 99b"},
            {"id": "8.1.3", "name": "Mixed Rooted Terminals", "desc": "All sets contain only Terminals and Honours", "points": "100", "ex": "111999c 999p 111b 22w"},
            {"id": "8.1.4", "name": "Pure Rooted Terminals", "desc": "All sets contain only Terminals", "points": "400", "ex": "111999c 999p 111b 11b"}
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
            {"id": "10.1", "name": "Thirteen Wonders", "desc": "All 13 terminal and honour tiles, plus an additional terminal/honour", "points": "160", "ex": "19c 19p 19b 123d 1234w 9p"},
            {"id": "10.2", "name": "Seven Pairs", "desc": "Pairs only", "points": "30", "ex": "22c 66c 44p 88p 99p 22d 33w"}
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
                let example = p.ex !== undefined
                return `<tr class="${example && "noborder"} ${split && "table-group-divider"}">
                    <th>${p.id}</th>
                    <td><b>${p.name}</b><br>${p.desc}</td>
                    <td>${p.points}</td>
                </tr>
                ${example ? `<tr><td colspan=3>${getExample(p.ex)}</td></tr>` : ""}`
            }).join(" ")}
        </tbody>
        </table>
    `)
}

function getExample(tiles) {
    let hand = `<div class='example d-flex justify-content-center align-items-center'>`
    tiles.match(/\d+[cpbdw\?]/g).forEach((group) => {
        let groupArr = group.split("")
        let suit = groupArr.pop()
        if (suit === "?") {
            for (let x = 0; x < parseInt(group); x++) {
                hand += `<img src='./resources/tiles/at.png' />`
            }
        } else {
            groupArr.forEach((tile) => {
                hand += `<img src='./resources/tiles/${tile + suit}.png' />`
            })
        }

    })
    hand += "</div>"
    return hand
}

$(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom',
        html: true
    });
})
