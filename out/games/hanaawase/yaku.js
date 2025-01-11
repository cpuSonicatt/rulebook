const displayYaku = (n, p, i) => `
    <p}><b>${n}</b><br>${p}</p>
    <div class="container mb-5">
        <img class="w-100" src="./resources/yaku/${i}.png">
    </div>
`

const lightsYaku = [
    {
        name: "Five Lights (5 light cards)",
        points: "100 points",
        img: "5lights"
    },
    {
        name: "Four Lights (any 4 light cards)",
        points: "60 points",
        img: "4lights"
    },
    {
        name: "Spring Lights (the Jan Light, the Feb Animal, and the Mar Light)",
        points: "30 points",
        img: "springlights"
    },
    {
        name: "Pine, Pawlownia, Moon",
        points: "20 points",
        img: "pinepaulowniamoon"
    }
]

const slipsYaku = [
    {
        name: "Seven Slips (any 7 slips excl. Willow Slip)",
        points: "40 points",
        img: "7slips",
    },
    {
        name: "Six Slips (any 6 slips excl. Willow Slip)",
        points: "30 points",
        img: "6slips",
    },
    {
        name: "Poetry Slips",
        points: "40 points",
        img: "poetryslips"
    },
    {
        name: "Blue Slips",
        points: "40 points",
        img: "blueslips"
    },
    {
        name: "Grass Slips (excl. Willow Slip)",
        points: "20 points",
        img: "grassslips"
    }
]

const animalsYaku = [
    {
        name: "Boar-Deer-Butterfly",
        points: "20 points",
        img: "boardeerbutterflies"
    }
]

const viewingYaku = [
    {
        name: "Drinking",
        points: "40 points",
        img: "drinking"
    },
    {
        name: "Flower Viewing",
        points: "20 points",
        img: "flowerviewing"
    },
    {
        name: "Moon Viewing",
        points: "20 points",
        img: "moonviewing"
    }
]

const foakYaku = [
    {
        name: "Willow row",
        points: "10 points",
        img: "willowrow"
    },
    {
        name: "Wisteria row",
        points: "10 points",
        img: "wisteriarow"
    },
    {
        name: "Paulownia row",
        points: "10 points",
        img: "paulowniarow"
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

for (let yaku of viewingYaku) {
    $("#viewing").append(displayYaku(yaku.name, yaku.points, yaku.img))
}

for (let yaku of foakYaku) {
    $("#foak").append(displayYaku(yaku.name, yaku.points, yaku.img))
}