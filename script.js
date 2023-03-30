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
            <a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="./games/${game.link}">
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

    $("#madewith").html(`<p class="smaller">Made with ${madewith()} by Jacq</p>`)
    twemoji.parse(document.body)
})

Array.prototype.sample = function() {
    return this[Math.floor((Math.random() * this.length))]
}

function madewith() {
    return [
        // love
        "love",
        "<3",
        "❤️", 
        ":heart:",

        // programming
        "${RANDOM_FOOTER_PHRASE}",
        "1337 hackzor skillz",
        "<samp>java.lang.ArrayIndexOutOfBoundsException: " +  Math.floor(Math.random() * 9 + 3) + "</samp>",
        "/* TODO: Add more phrases */",
        "love'); DROP TABLE Students;--",
        "tabs, not spaces",
        "spaces, not tabs",
        "/* eslint-disable-next-line */",
        "01101100011011110111011001100101",
        "bad programming",

        // video games
        Math.floor(Math.random() * 9 + 10) + " compile errors",
        "MOTHERLODE",
        "redstone",
        "sv_cheats 1",
        "john madden john madden john madden john madden",
        "aeiouaeiouaeiou",

        // board/card games
        "Get Out of Jail Free cards",
        "Free Parking",
        "nat 1s",
        "nat 20s",
        "en passant",
        "Blue-Eyes White Dragon",

        // other
        "lots of swearing",
        "aaaaaaaaaa",
        "confusion",
        "bad ideas",
        "cute cats",
        "cute dogs",
        "_______",
        "HELP, I'M STUCK IN A FOOTER MESSAGE FACTORY!",
        ".-.. --- ...- .",
        "impending doom",
        "����",
        "a relevant and topical joke",
        "Unregistered Hypercam 2",
        "a WinRAR license",
        "ur mum lol",

        // special
        `<a target="_blank" href="https://youtu.be/dQw4w9WgXcQ">dQw4w9WgXcQ</a>`,
        "trans rights", "🏳️‍⚧️",
        "rainbows", "🏳️‍🌈"

    ].sample()
}