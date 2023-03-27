let games = [
    {
        "icon": "📍",
        "name": "Cribbage",
        "link": "cribbage",
        "type": ["Card (Standard 52)", "Matching", "England", "2-3 players"]
    },
    {
        "icon": "🎴",
        "name": "Koi-koi",
        "link": "koikoi",
        "type": ["Card (Hanafuda)", "Fishing", "Japan", "2 players"]
    },
    {
        "icon": "🀄",
        "name": "Zung Jung",
        "link": "zungjung",
        "type": ["Tile (Mahjong)", "Matching", "Hong Kong", "4 players"]
    },
    {
        "icon": "👑",
        "name": "Ricochet Poker",
        "link": "ricochetpoker",
        "type": ["Card (Standard 52)", "Gambling", "USA", "2-7 players"]
    },
    {
        "icon": "♠️",
        "name": "Shithead",
        "link": "shithead",
        "type": ["Card (Standard 52)", "Shedding", "2-4 players"]
    },
    {
        "icon": "🔥",
        "name": "Oh Hell!",
        "link": "ohhell",
        "type": ["Card (Standard 52)", "Trick-taking", "2-4 players"]
    },
    {
        "icon": "🌧️",
        "name": "Spit",
        "link": "spit",
        "type": ["Card (Standard 52)", "Shedding", "2+ players"]
    }
]


$(document).ready(function () {
    let list = $("#list")
    games = games.sort((a,b) => a.name > b.name ? 1 : -1)
    for (let game of games) {
        list.append(`
            <a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="./games/${game.link}/index.html">
                <div class="mt-3 d-flex flex-column align-items-center w-50">
                    <div class="mx-auto">${game.icon}</div>
                    <p id="hover" class="fs-4 text-nowrap"><b>${game.name}</b></p>
                </div>

                <div class="me-3 d-flex flex-column align-items-end">
                    ${game.type.map((e) => `
                        <p class="my-1 fs-6">${e}</p>
                    `).join(" ")}
                </div> 
            </a>
        `)
    }
    twemoji.parse(document.body)
})