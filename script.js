let games = [
    {
        "icon": "📍",
        "name": "Cribbage",
        "link": "cribbage",
        "type": ["Card (Standard 52)", "Matching", "2-4 players"]
    },
    {
        "icon": "👑",
        "name": "Ricochet Poker",
        "link": "ricochetpoker",
        "type": ["Card (Standard 52)", "Gambling", "2-7 players"]
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
        "type": ["Card (Standard 52)", "Trick-taking", "3-7 players"]
    },
    {
        "icon": "🌧️",
        "name": "Spit",
        "link": "spit",
        "type": ["Card (Standard 52)", "Shedding", "2+ players"]
    },
    {
        "icon": "😋",
        "name": "Rummy",
        "link": "rummy",
        "type": ["Card (Standard 52)", "Shedding", "2-6 players"]
    },
    {
        "icon": "🥴",
        "name": "Gin Rummy",
        "link": "rummygin",
        "type": ["Card (Standard 52)", "Shedding", "2 players"]
    },
    {
        "icon": "🏡",
        "name": "Fight the Landlord",
        "link": "fightthelandlord",
        "type": ["Card (Standard 52)", "Shedding", "3 players"]
    },
    {
        "icon": "🥜",
        "name": "Nerts",
        "link": "nerts",
        "type": ["Card (Standard 52)", "Shedding", "3+ players"]
    },

    {
        "icon": "🎴",
        "name": "Koi-koi",
        "link": "koikoi",
        "type": ["Card (Hanafuda)", "Fishing", "2 players"]
    },
    {
        "icon": "💮",
        "name": "Hana-Awase",
        "link": "hanaawase",
        "type": ["Card (Hanafuda)", "Fishing", "2-4 players"]
    },
    {
        "icon": "🀄",
        "name": "Mahjong",
        "link": "mahjong",
        "type": ["Tile (Mahjong)", "Matching", "4 players"]
    },
    {
        "icon": "🏎️",
        "name": "Racetrack",
        "link": "racetrack",
        "type": ["Pencil and Paper", "Racing", "2+ players"]
    },
    {
        "icon": "🕳️",
        "name": "Mancala",
        "link": "mancala",
        "type": ["Stones", "Strategy", "2 players"]
    }
]

$(document).ready(function () {
    let list = $("#list")
    for (let game of games) {
        list.append(`
            <a class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" href="./games/${game.link}">
                <div class="mt-3 d-flex flex-column align-items-center w-50">
                    <div class="mx-auto">${game.icon}</div>
                    <p id="hover" class="fs-4 text-center"><b>${game.name}</b></p>
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
        "💖", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤍", "🖤", "🤎",
        "🫀", // atanomical heart
        ":heart:",
        ".-.. --- ...- .",
        "����",
        "6C 6F 76 65",

        // programming
        "${RANDOM_FOOTER_PHRASE}",
        "1337 hackzor skillz",
        "<samp>java.lang.ArrayIndexOutOfBoundsException: " + Math.floor(Math.random() * 9 + 3) + "</samp>",
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
        `System.out.println("love")`,
        `console.log("love")`,
        `puts "love"`,

        // video games
        Math.floor(Math.random() * 9 + 10) + " compile errors",
        "motherlode",
        "redstone",
        "sv_cheats 1",
        "john madden john madden john madden john madden",
        "aeiouaeiouaeiou",
        "/gamemode 1",
        "/give @a diamond_block 64",
        "🡹 🡹 🡻 🡻 🡸 🡺 🡸 🡺 <kbd>B</kbd> <kbd>A</kbd> <kbd>START</kbd>",
        "E X T E N D",

        // board/card games
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

        // music
        "power, pleasure, and pain",
        "money, money, money",
        "all the small things",
        "scenes from a memory",
        "the sunshine of your love",
        "warm wet circles",
        "the ecstacy of gold",
        "tubular bells",
        "hysteria",
        "moving pictures",
        "miracle shopping",

        // other
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

        // special
        `<a target="_blank" href="https://youtu.be/dQw4w9WgXcQ">dQw4w9WgXcQ</a>`,
        "trans rights 🏳️‍⚧️",
        "rainbows 🏳️‍🌈"

    ].sample()
}