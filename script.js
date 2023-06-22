let games = [
    {
        "icon": "📍",
        "name": "Cribbage",
        "link": "cribbage",
        "group": "card",
        "type": "Matching",
        "players": "2-4 players",
    },
    {
        "icon": "👑",
        "name": "Ricochet Poker",
        "link": "ricochetpoker",
        "group": "card",
        "type": "Gambling",
        "players": "2-7 players",
    },
    {
        "icon": "♠️",
        "name": "Shithead",
        "link": "shithead",
        "group": "card",
        "type": "Shedding",
        "players": "2-4 players",
    },
    {
        "icon": "🔥",
        "name": "Oh Hell!",
        "link": "ohhell",
        "group": "card",
        "type": "Trick-taking",
        "players": "3-7 players",
    },
    {
        "icon": "🌧️",
        "name": "Spit",
        "link": "spit",
        "type": ["Card (Standard 52)", "Shedding", "2+ players"],
        "group": "card",
        "type": "Shedding",
        "players": "2+ players",
    },
    {
        "icon": "😋",
        "name": "Rummy",
        "link": "rummy",
        "type": ["Card (Standard 52)", "Shedding", "2-6 players"],
        "group": "card",
        "type": "Shedding",
        "players": "2-6 players",
    },
    {
        "icon": "🥴",
        "name": "Gin Rummy",
        "link": "rummygin",
        "group": "card",
        "type": "Shedding",
        "players": "2 players",
    },
    {
        "icon": "🏡",
        "name": "Fight the Landlord",
        "link": "fightthelandlord",
        "group": "card",
        "type": "Shedding",
        "players": "3 players",
    },
    {
        "icon": "🥜",
        "name": "Nerts",
        "link": "nerts",
        "group": "card",
        "type": "Shedding",
        "players": "3+ players",
    },

    {
        "icon": "🎴",
        "name": "Koi-koi",
        "link": "koikoi",
        "group": "hanafuda",
        "type": "Fishing",
        "players": "2 players",
    },
    {
        "icon": "💮",
        "name": "Hana-Awase",
        "link": "hanaawase",
        "group": "hanafuda",
        "type": "Fishing",
        "players": "2-4 players",
    },
    {
        "icon": "🀄",
        "name": "Mahjong",
        "link": "mahjong",
        "group": "tile",
        "type": "Matching",
        "players": "4 players",
    },
    {
        "icon": "🏎️",
        "name": "Racetrack",
        "link": "racetrack",
        "group": "pencilpaper",
        "type": "Racing",
        "players": "2+ players",
    },
    {
        "icon": "🕳️",
        "name": "Mancala",
        "link": "mancala",
        "group": "tile",
        "type": "Strategy",
        "players": "2 players",
    }
]

$(document).ready(function () {
    games = games.sort((a,b) => a.link > b.link ? 1 : -1)
    for (let game of games) {
        $(`#${game.group}`).append(`
            <div class="col-xl-4 col-md-6 col-">
                <a class="main" href="./games/${game.link}">
                    <div class="d-flex align-items-center my-4">
                        <div>${game.icon}</div>
                        <div class="mx-4">
                            <p id="hover" class="fs-4 mb-0"><b>${game.name}</b></p>
                            <p class="mb-0">${game.type} • ${game.players}</p>
                        </div>
                    </div>
                </a>
            </div>
        `)
    }

    $("#madewith").html(`<p class="smaller">Made with ${madewith()} by Jacq</p>`)
    // $("#madewith").append(`<p class="smaller mt-5">Made with ❤️ by Jacq</p>`)

    twemoji.parse(document.body)
})


Array.prototype.sample = function() {
    return this[Math.floor((Math.random() * this.length))]
}

function madewith() {
    return [
        // love
        "love",
        "luv",
        "loooooooooooooove",
        "<3",
        "💖", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤍", "🖤", "🤎",
        "🫀", // anatomical heart
        ":heart:",
        ".-.. --- ...- .",
        "����",
        "6C 6F 76 65",

        // programming
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
        "images and words",
        "scenes from a memory",
        "the sunshine of your love",
        "warm wet circles",
        "the ecstacy of gold",
        "tubular bells",
        "hysteria",
        "moving pictures",
        "miracle shopping",
        "a little bit of Monica in my life",
        "a little bit of Erica by my side",
        "a little bit of Rita's all i need",
        "a little bit of Tina what i see",
        "a little bit of Sandra in the sun",
        "a little bit of Mary all night long",
        "a little bit of Jessica, here i am",

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
        "urrmmm...",
        "no added sugar",
        "no artificial colours",    

        // special
        `<a target="_blank" href="https://youtu.be/dQw4w9WgXcQ">dQw4w9WgXcQ</a>`,
        "trans rights 🏳️‍⚧️",
        "rainbows 🏳️‍🌈"

    ].sample()
}