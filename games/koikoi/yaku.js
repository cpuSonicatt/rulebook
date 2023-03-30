const displayYaku = (n, p, i) => `
    <p ${i === "moonviewing" ? `id="moon"` : ``}><b>${n}</b><br>${p}</p>
    <div class="container">
        <img class="w-100 mb-3" src="./resources/yaku/${i}.png">
    </div>
`

const lightsYaku = [
    {
        name: "Five Lights (all light cards)",
        points: "10 points",
        img: "5lights"
    },
    {
        name: "Dry Four Lights (4 light cards excl. Rain)",
        points: "8 points",
        img: "dry4lights"
    },
    {
        name: "Rainy Four Lights (4 light cards incl. Rain)",
        points: "7 points",
        img: "rainy4lights"
    },
    {
        name: "Three Lights (3 light cards excl. Rain)",
        points: "6 points",
        img: "3lights"
    }
]

const slipsYaku = [
    {
        name: "Red Poetry",
        points: "5 points, plus 1 for each additional Slip card",
        img: "redslips"
    },
    {
        name: "Blue Poetry",
        points: "5 points, plus 1 for each additional Slip card",
        img: "blueslips"
    },
    {
        name: "Slips (5 or more Slip cards)",
        points: "1 point, plus 1 for each additional Slip card",
        img: "slips"
    },
]

const animalsYaku = [
    {
        name: "Boar-Deer-Butterfly",
        points: "5 points, plus 1 for each additional Animal card",
        img: "boardeerbutterflies"
    },
    {
        name: "Animals (5 or more Animal cards)",
        points: "1 point, plus 1 for each additional Animal card",
        img: "animals"
    }
]

const othersYaku = [
    {
        name: "Monthly (4 cards of the same month in the corresponding round)",
        points: "4 points",
        img: "monthly"
    },
    {
        name: "Moon Viewing (optional)",
        points: "6 points",
        img: "moonviewing"
    },
    {
        name: "Cherry Blossom Viewing (optional)",
        points: "6 points",
        img: "cherryblossomviewing"
    },
    {
        name: "Chaff (10 or more Chaff cards)",
        points: "1 point, plus 1 for each additional Chaff card",
        img: "chaff"
    }
]



for (let yaku of lightsYaku) {
    $("#lights").append(displayYaku(yaku.name, yaku.points, yaku.img))
}

for (let yaku of animalsYaku) {
    $("#animals").append(displayYaku(yaku.name, yaku.points, yaku.img))
}

for (let yaku of slipsYaku) {
    $("#slips").append(displayYaku(yaku.name, yaku.points, yaku.img))
}

for (let yaku of othersYaku) {
    $("#other").append(displayYaku(yaku.name, yaku.points, yaku.img))
}