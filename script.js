$(document).ready(async function () {

    games = await (await fetch("./games.json")).json()

    for (let group of Object.keys(games)) {
        for (let [name, info] of Object.entries(games[group])) {
            $(`#${group}`).append(`
                <div class="col-xxl-4 col-lg-6 col-sm-12">
                    <a class="a-reg-colour" href="./games/${info.link}">
                        <div class="d-flex flex-sm-row flex-column align-items-center text-center text-sm-start my-4">
                            <i class="twa-5x twa-${info.icon}"></i>
                            <div class="mx-4">
                                <p id="hover" class="fs-4 mb-0"><b>${name}</b></p>
                                <p class="mb-0">${[info.type, getPlayers(info.players)].join(" • ")}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `)
        }
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
        `<i class="mx-2 twa twa-lg twa-sparkling-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-red-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-orange-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-yellow-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-green-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-blue-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-purple-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-white-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-black-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-brown-heart"></i>`,
        `<i class="mx-2 twa twa-lg twa-anatomical-heart"></i>`,
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
        "the man machine",
        "giant steps",
        "99 red balloons",
        "a kiss from a rose",
        "breakfast in america",
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
        `<a class="mx-2" target="_blank" href="https://youtu.be/dQw4w9WgXcQ">dQw4w9WgXcQ</a>`,
        `trans rights <i class="mx-2 twa-lg twa-transgender-flag"></i>`,
        `rainbows <i class="mx-2 twa-lg twa-rainbow-flag"></i>`

    ].sample()
}