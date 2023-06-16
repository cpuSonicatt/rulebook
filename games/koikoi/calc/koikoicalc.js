// format: <mon><type>
// mon - 3 letter month
// type - (l)gt/(a)ni/(s)lp/(c)ha

class KoiKoi {

    constructor(pile, m) {
        this.pile = pile.split(" ")
        this.month = m

        return this
    }

    LIGHTS_MONTHS = ["janl", "marl", "augl", "novl", "decl"]
    RED_SLIPS = ["jans", "febs", "mars"]
    BLUE_SLIPS = ["juns", "seps", "octs"]
    BLANK_SLIPS = ["aprs", "mays", "juls", "novs"]
    SLIPS = [...this.RED_SLIPS, ...this.BLUE_SLIPS, ...this.BLANK_SLIPS]
    BDB = ["jula", "octa", "juna"]
    ANIMALS = ["feba", "apra", "maya", "juna", "jula", "auga", "sepa", "octa", "nova"]

    so = (s, d) => { return {pts: s, desc: d} }

    howMany = (p, pred) => {
        return p.filter(pred).length
    }

    lights = (p) => {
        switch (this.howMany(p, (p) => this.LIGHTS_MONTHS.includes(p))) {
            case 5: return this.so(10, "Five Lights")
            case 4: return p.includes("novlgt") ? this.so(7, "Rainy Four Lights") : this.so(8, "Dry Four Lights")
            case 3: return p.includes("novlgt") ? this.so(0, "") : this.so(6, "Three Lights")
        }
        return this.so(0, "")
    }

    slipsRed = (p) => 
        this.howMany(p, (p) => this.RED_SLIPS.includes(p)) >= 3
            ? this.so(5 + (this.howMany(p, (p) => this.SLIPS.includes(p)) - 3), "Red Poetry")
            : this.so(0, "")

    slipsBlue = (p) => 
        this.howMany(p, (p) => this.BLUE_SLIPS.includes(p)) >= 3
            ? this.so(5 + (this.howMany(p, (p) => this.SLIPS.includes(p)) - 3), "Blue Poetry")
            : this.so(0, "")

    slipsFive = (p) => {
        let amnt = this.howMany(p, (p) => this.SLIPS.includes(p))
        return amnt >= 5
            ? this.so(1 + (amnt - 5), "Slips")
            : this.so(0, "")
    }

    aniBDB = (p) => 
        this.howMany(p, (p) => this.BDB.includes(p)) == 3
            ? this.so(5 + (this.howMany(p, (p) => this.ANIMALS.includes(p)) - 3), "Boar-Deer-Butterfly")
            : this.so(0, "")
    

    aniFive = (p) => {
        let amnt = this.howMany(p, (p) => this.ANIMALS.includes(p))
        return amnt >= 5
            ? this.so(1 + (amnt - 5), "Animals")
            : this.so(0, "")
    }

    monthly = (p) => 
        this.howMany(p, (p) => p.slice(0,3) == this.month) == 4
            ? this.so(4, "Monthly")
            : this.so(0, "")
    

    cbViewing = (p) => 
        this.howMany(p, (p) => p.includes("marl") || p.includes("sepa")) == 2
            ? this.so(6, "Cherry Blossom Viewing")
            : this.so(0, "")
    

    mViewing = (p) => 
        this.howMany(p, (p) => p.includes("augl") || p.includes("sepa")) == 2
            ? this.so(6, "Moon Viewing")
            : this.so(0, "")
    

    chaff = (p) => {
        let amnt = this.howMany(p, (p) => p.slice(-1) == "c")
        return amnt >= 10
            ? this.so(1 + (amnt - 5), "Animals")
            : this.so(0, "")
    }

    scoreFuncs = [
        this.lights,
        this.slipsRed,
        this.slipsBlue,
        this.slipsFive,
        this.aniBDB,
        this.aniFive,
        this.monthly,
        this.cbViewing,
        this.mViewing,
        this.chaff
    ]

    score() {
        let scoreBreakdown = []
        let total = 0
        for (let scoreFunc of this.scoreFuncs) {
            let yaku = scoreFunc(this.pile)
            if (yaku.pts > 0) {
                scoreBreakdown.push(yaku)
                total += yaku.pts
            }
        }
        total *= total >= 7 ? 2 : 1
        return {
            total: total,
            bd: scoreBreakdown
        }
    }
    

}

console.log(new KoiKoi("jans febs mars seps sepa marl", "jan").score())