class Mahjong {
    constructor(hand, seat, incids) {
        this.hand = hand.match(/\d{2,4}[cpbdw]#?/g)
        this.seat = seat
        this.incids = incids
        return this
    }

    isValidHand = (h) => {
        let handLen = h.join("").match(/\d/g).length
        return handLen > 13 && handLen < 19
    }

    isMelded = (s) => /#/.test(s)

    // set conditions
    isRun = (s) => /(123|234|345|456|567|678|789)/.test(s)
    isQuadRun = (s) => /(1234|2345|3456|4567|5678|6789)/.test(s)
    isTriQuad = (s) => /(\d)\1\1\1?/.test(s)
    isQuad = (s) => /(\d)\1\1\1/.test(s)
    isPair = (s) => /(\d)\1[cpbdw]/.test(s)

    // set type conditions
    isBranching = (s) => /123|789[cpb]/.test(s)
    isNineGates = (s) => /^1{3,4}([2-8]{1,2}){8}9{3,4}$/.test(s)

    // suit conditions
    isSingleSuit = (s) => [this.isCharacters(s), this.isPins(s), this.isBamboo(s)].filter(x => x).length == 1
    isAllSuit = (s) => [this.isCharacters(s), this.isPins(s), this.isBamboo(s)].filter(x => x).length == 3
    isCharacters = (s) => /c/.test(s)
    isPins = (s) => /p/.test(s)
    isBamboo = (s) => /b/.test(s)

    // terminal conditions
    isTerminals = (s) => /(1+\d+|\d+9+)[cpb]/.test(s)

    // honour conditions
    isHonours = (s) => this.isDragons(s) || this.isWinds(s)
    isDragons = (s) => /d/.test(s)
    isWinds = (s) => /w/.test(s)
    isSeatWinds = (s) => new RegExp(this.seat + "+w", "").test(s)

    // irregular conditiosn
    isThirtWond = (s) => /(11?99?)[cpb]|(11?22?33?)d|(11?22?33?44?)w/.test(s)


    // trivials
    tRuns = (h) =>
        this.howMany(h, this.isRun) == 4 ? [5, "All Runs"] : [0, ""]


    tConcealed = (h) =>
        this.howMany(h, this.isMelded) == 0 ? [5, "Concealed Hand"] : [0, ""]


    tNoTerHon = (h) =>
        this.howMany(h, (h) => this.isDragons(h) || this.isHonours((h)) || this.isTerminals(h)) == 0 ? [5, "No Terminals or Honours"] : [0, ""]


    //one-suits
    osMixedPure = (h) => {
        if (this.isSingleSuit(h) && !this.isDragons(h)) {
            if (!this.isHonours(h)) {
                return [80, "Pure One-suit"]
            } else if (this.isHonours(h)) {
                return [40, "Mixed One-suit"]
            }
        }
        return [0, ""]
    }

    osNGates = (h) =>
        this.isSingleSuit(h) && this.isNineGates(h.join("").split("").filter(s => s > 0).join("")) && !this.isHonours(h) ? [480, "Nine Gates"] : [0, ""]


    // honours
    hValue = (h) => 
        [this.howMany(h, (h) => this.isTriQuad(h) &&
            (this.isSeatWinds(h) || this.isDragons(h))
        ) * 10, "Value Honour"]


    hSmBgThrDra = (h) => {
        h = h.filter(set => this.isDragons(set))
        if (h.length == 3) {
            if (this.howMany(h, this.isTriQuad) == 3) {
                return [130, "Big Three Dragons"]
            } else if (this.howMany(h, (h) => this.isTriQuad(h) || this.isPair(h)) == 3) {
                return [40, "Small Three Dragons"]
            }
        }
        return [0, ""]
    }

    hSmBgThrFouWind = (h) => {
        h = h.filter(set => this.isWinds(set))
        if (h.length >= 3) {
            if (this.howMany(h, this.isTriQuad) == 4) {
                return [440, "Small Three Winds"]
            } else if (this.howMany(h, (h) => this.isTriQuad(h) || this.isPair(h)) == 4) {
                return [320, "Big Three Winds"]
            } else if (this.howMany(h, this.isTriQuad) == 3) {
                return [120, "Small Four Winds"]
            } else if (this.howMany(h, this.isTriQuad) == 2 && this.howMany(h, this.isPair) == 1) {
                return [30, "Big Four Winds"]
            }
        }
        return [0, ""]
    }

    hHonsOnly = (h) =>
        this.howMany(h, this.isHonours) == h.length ? [320, "All Honours"] : [0, ""]


    // trips/quads
    tqTrips = (h) =>
        this.howMany(h, this.isTriQuad) == 4 ? [30, "All Triplets"] : [0, ""]

    tqTwoThrFourConcTrips = (h) => {
        switch (this.howMany(h, (h) => this.isTriQuad(h) && !this.isMelded(h))) {
            case 2: return [5, "Two Concealed Triplets"]
            case 3: return [30, "Three Concealed Triplets"]
            case 4: return [125, "Four Concealed Triplets"]
            default: return [0, ""]
        }
    }

    tqOneTwoThrFourConcQuads = (h) => {
        switch (this.howMany(h, this.isQuad)) {
            case 1: return [5, "One Quad"]
            case 2: return [20, "Two Quads"]
            case 3: return [120, "Three Quads"]
            case 4: return [480, "Four Quads"]
            default: return [0, ""]
        }
    }

    // identical
    iIdentRuns = (h) => {
        h = h.map((s) => s = s.replace("#", ""))
        let counts = {}
        for (let set of h) {
            set
            counts[set] = counts[set] ? counts[set] + 1 : 1
        }
        counts = Object.keys(counts).filter((k) => counts[k] > 1)
        h = h.filter(x => counts.includes(x))

        if (this.howMany(counts, this.isRun) == 1 && h.length == 2) return [10, "Two Identical Runs"]
        if (this.howMany(counts, this.isRun) == 2 && h.length == 4) return [60, "Double Two Identical Runs"]
        if (this.howMany(counts, this.isRun) == 1 && h.length == 3) return [120, "Three Identical Runs"]
        if (this.howMany(counts, this.isRun) == 1 && h.length == 4) return [480, "Four Identical Runs"]
        return [0, ""]
    }

    // similars
    sThreeSimRuns = (h) => {
        let runs = h.filter(this.isRun).map((s) => s = s.replace("#", ""))
        let counts = {}
        for (let set of runs) {
            set = set.slice(0, 3)
            counts[set] = counts[set] ? counts[set] + 1 : 1
        }
        counts = Object.keys(counts).filter((k) => counts[k] == 3)
        runs = runs.filter(x => x.includes(counts[0]))

        return this.isAllSuit(runs) ? [35, "Three Similar Runs"] : [0, ""]
    }

    sSmBgSimTrips = (h) => {
        let biSmTrQus = h.filter((h) => this.isTriQuad(h) || this.isPair(h))
        let counts = {}
        for (let set of biSmTrQus) {
            set = set.slice(0, 1)
            counts[set] = counts[set] ? counts[set] + 1 : 1;
        }
        counts = Object.keys(counts).filter((k) => counts[k] == 3)
        biSmTrQus = biSmTrQus.filter(x => x.includes(counts[0]))
        
        if (biSmTrQus.length == 3) {
            if (this.howMany(biSmTrQus, this.isTriQuad) == 3) {
                return [120, "Small Three Similar Triplets"]
            } else if (this.howMany(biSmTrQus, (biSmTrQus) => this.isTriQuad(biSmTrQus) || this.isPair(biSmTrQus)) == 3) {
                return [30, "Big Three Similar Triplets"]
            }
        }
        return [0, ""]
    }

    // consecutives
    cStraight = (h) => {
        let runs = [...new Set(h.filter(this.isRun))]
        let counts = {}
        for (let set of runs) {
            set = set.slice(3, 4)
            counts[set] = counts[set] ? counts[set] + 1 : 1;
        }
        counts = Object.keys(counts).filter((k) => counts[k] == 3)
        runs = runs.filter(x => x.includes(counts[0]))
        return (this.isSingleSuit(runs)) ? [40, "Nine-tile Straight"] : [0, ""]
    }


    cThrFourConTrip = (h) => {
        h = h.filter(this.isTriQuad).map(s => s.slice(0, 1)).join("")
        if (this.isQuadRun(h)) return [200, "Three Consecutive Triplets"]
        if (this.isRun(h)) return [100, "Four Consecutive Triplets"]
        return [0, ""]
    }

    // terminals
    tMixPureBraRootTerms = (h) => {
        if (this.howMany(h, this.isTerminals) == h.length) {
            if (this.isBranching(h)) {
                return [50, "Pure Branching Terminals"]
            }
            return [400, "Pure Rooted Terminals"]
        } else if (this.howMany(h, (h) => this.isTerminals(h) || this.isHonours(h)) == h.length) {
            if (this.isBranching(h)) {
                return [40, "Mixed Branching Terminals"]
            }
            return [100, "Pure Branching Terminals"]
        }
        return [0, ""]
    }

    // incidentals
    iFinalDrawDiscard = () => this.incids.selfdraw || this.incids.discard ? [10, this.incids.selfdraw ? "Final Draw" : "Final Discard"] : [0, ""]
    
    iWinOnQuad = () => this.incids.supp ? [10, "Win on Quad"] : [0, ""]
    iRobQuad = () => this.incids.rob ? [10, "Robbing a Quad"] : [0, ""]
    iBlessings = () => this.incids.earth || this.incids.heaven ? [155, this.incids.earth ? "Blessing of Earth" : "Blessing of Heaven"] : [0, ""]


    // irregulars
    iThirtWond = (h) =>
        this.isThirtWond(h) && /(\d)\1/.test(h) ? [160, "Thirteen Wonders"] : [0, ""]

    iSevenPairs = (h) => 
        this.howMany(h, this.isPair) == 7 ? [30, "Seven Pairs"] : [0, ""]
    

    scoreFuncs = [
        this.tRuns,
        this.tConcealed,
        this.tNoTerHon,
        this.osMixedPure,
        this.osNGates,
        this.hValue,
        this.hSmBgThrDra,
        this.hSmBgThrFouWind,
        this.hHonsOnly,
        this.tqTrips,
        this.tqTwoThrFourConcTrips,
        this.tqOneTwoThrFourConcQuads,
        this.iIdentRuns,
        this.sThreeSimRuns,
        this.sSmBgSimTrips,
        this.cStraight,
        this.cThrFourConTrip,
        this.tMixPureBraRootTerms,
        this.iFinalDrawDiscard,
        this.iWinOnQuad,
        this.iRobQuad,
        this.iBlessings,
        this.iThirtWond,
        this.iSevenPairs
    ]

    howMany = (hand, pred) => hand.filter(pred).length

    score() {
        
        if (this.isValidHand(this.hand)) {
            let scoreBreakdown = []
            let total = 0
            for (let scoreFunc of this.scoreFuncs) {
                let [score, desc] = scoreFunc(this.hand)
                if (score > 0) {
                    scoreBreakdown.push({score, desc})
                    total += score
                } else {
                    scoreBreakdown.push({score: 0, desc: ""})
                }
            }
            let highest = scoreBreakdown.reduce((p, c) => p.score > c.score ? p : c)
            if (total >= 320) {
                if (320 > highest.score) {
                    return {total: 320, bd: [{ score: 320, desc: "Compound Limit Hand" }]}
                } else {
                    return {total: highest.score, bd: [ highest ]}
                }
            } else if (total == 0)  {
                return {
                    total: 1,
                    bd: [{score: 1, desc: "Chicken Hand"}]
                }
            }
            return {
                total: total,
                bd: scoreBreakdown
            }
        }
        return {
            total: 0,
            bd: {}
        }
    }

    isValid() {
        return this.isValidHand(this.hand)
    }

}