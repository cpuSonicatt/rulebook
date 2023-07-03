let games = [
    {
        "icon": "round-pushpin",
        "name": "Cribbage",
        "link": "cribbage",
        "group": "card",
        "type": "Matching",
        "players": "2-4"
    },
    {
        "icon": "crown",
        "name": "Ricochet Poker",
        "link": "ricochetpoker",
        "group": "card",
        "type": "Gambling",
        "players": "2-7"
    },
    {
        "icon": "spade-suit",
        "name": "Shithead",
        "link": "shithead",
        "group": "card",
        "type": "Shedding",
        "players": "2-4"
    },
    {
        "icon": "fire",
        "name": "Oh Hell!",
        "link": "ohhell",
        "group": "card",
        "type": "Trick-taking",
        "players": "3-7"
    },
    {
        "icon": "cloud-with-rain",
        "name": "Spit",
        "link": "spit",
        "type": ["Card (Standard 52)", "Shedding", "2+ players"],
        "group": "card",
        "type": "Shedding",
        "players": "2+"
    },
    {
        "icon": "face-savoring-food",
        "name": "Rummy",
        "link": "rummy",
        "type": ["Card (Standard 52)", "Shedding", "2-6 players"],
        "group": "card",
        "type": "Shedding",
        "players": "2-6"
    },
    {
        "icon": "woozy-face",
        "name": "Gin Rummy",
        "link": "rummygin",
        "group": "card",
        "type": "Shedding",
        "players": "2"
    },
    {
        "icon": "house-with-garden",
        "name": "Fight the Landlord",
        "link": "fightthelandlord",
        "group": "card",
        "type": "Shedding",
        "players": "3"
    },
    {
        "icon": "peanuts",
        "name": "Nerts",
        "link": "nerts",
        "group": "card",
        "type": "Shedding",
        "players": "3+"
    },
    {
        "icon": "flower-playing-cards",
        "name": "Koi-koi",
        "link": "koikoi",
        "group": "hanafuda",
        "type": "Fishing",
        "players": "2"
    },
    {
        "icon": "white-flower",
        "name": "Hana-Awase",
        "link": "hanaawase",
        "group": "hanafuda",
        "type": "Fishing",
        "players": "2-4"
    },
    {
        "icon": "mahjong-red-dragon",
        "name": "Mahjong",
        "link": "mahjong",
        "group": "tile",
        "type": "Matching",
        "players": "4"
    },
    {
        "icon": "racing-car",
        "name": "Racetrack",
        "link": "racetrack",
        "group": "pencilpaper",
        "type": "Racing",
        "players": "2+"
    },
    {
        "icon": "hole",
        "name": "Mancala",
        "link": "mancala",
        "group": "tile",
        "type": "Strategy",
        "players": "2"
    },
    {
        "icon": "bowling",
        "name": "Bowling Solitaire",
        "link": "bowling",
        "group": "solitaire",
        "type": "Card",
        "players": "1"
    }
]

$(document).ready(function () {
    games = games.sort((a,b) => a.link > b.link ? 1 : -1)
    for (let game of games) {
        $(`#${game.group}`).append(`
            <div class="col-xl-4 col-md-6 col-">
                <a class="main" href="./games/${game.link}">
                    <div class="d-flex align-items-center my-4">
                        
                        <i class="twa-5x twa-${game.icon}"></i>
                        <div class="mx-4">
                            <p id="hover" class="fs-4 mb-0"><b>${game.name}</b></p>
                            <p class="mb-0">${[game.type, getPlayers(game.players)].join(" • ")}</p>
                        </div>
                    </div>
                </a>
            </div>
        `)
    }

    $("#madewith").html(`<p class="d-flex justify-content-center align-items-center">Made with ${madewith()} by Jacq</p>`)
})

function getPlayers(num) {
    return `${num} player${num == "1" ? "" : "s"}`
}


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
        `<i class="mx-2 twa-lg twa-sparkling-heart"></i>`,
        `<i class="mx-2 twa-lg twa-red-heart"></i>`,
        `<i class="mx-2 twa-lg twa-orange-heart"></i>`,
        `<i class="mx-2 twa-lg twa-yellow-heart"></i>`,
        `<i class="mx-2 twa-lg twa-green-heart"></i>`,
        `<i class="mx-2 twa-lg twa-blue-heart"></i>`,
        `<i class="mx-2 twa-lg twa-purple-heart"></i>`,
        `<i class="mx-2 twa-lg twa-white-heart"></i>`,
        `<i class="mx-2 twa-lg twa-black-heart"></i>`,
        `<i class="mx-2 twa-lg twa-brown-heart"></i>`,
        `<i class="mx-2 twa-lg twa-anatomical-heart"></i>`,
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
        Math.floor(Math.random() * 9 + 10) + " compile errors",

        // video games
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
        "a little bit of Tina's what i see",
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
        `trans rights <i class="mx-2 twa-lg twa-transgender-flag"></i>`,
        `rainbows <i class="mx-2 twa-lg twa-rainbow-flag"></i>`

    ].sample()
}