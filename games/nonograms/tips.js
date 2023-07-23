let tips = [
    {
        "name": "Overlaps",
        "desc": "If a row/column has a number or set of numbers that add up to over half of the width of the row/column, then you can determine the squares which have to be filled in.",
        "examples": [
            {
                "img": "overlapa",
                "alt": "",
                "explain": "In this example, a group of 6 squares \"overlap\", and thus must be filled in. A quick way to work this out is fill in number of squares specified from the left side. Then, count the blank spaces remaining and erase that many squares from the other side.",
            },
            {
                "img": "overlapb",
                "alt": "",
                "explain": "Similarly, this works with sets of numbers. Fill in the number of squares specified in the smallest configuration, and erase squares from each group. The 6th column doesn't count for overlapping as it's across different groups (top belonging to the group of 3, and bottom belonging to the group of 4)."
            }
        ]
    },
    {
        "name": "Spreads",
        "desc": "n/a",
        "examples": [
            
        ]
    },
    {
        "name": "Forcing",
        "desc": "n/a",
        "examples": [
            
        ]
    },
    {
        "name": "Glue",
        "desc": "n/a",
        "examples": [
            
        ]
    },
    {
        "name": "Joining and Splitting",
        "desc": "n/a",
        "examples": [
            
        ]
    },
    {
        "name": "Mercury",
        "desc": "n/a",
        "examples": [
            
        ]
    }
]

for (let tip of tips) {
    $("#tips").append(`
        <h3>${tip.name}</h3>
        <p>${tip.desc}</p>
        ${
            tip.examples.map(ex => `
                <div class="my-4">
                    <img class="w-75 mx-auto d-block mb-4" alt="${ex.alt}" src="./resources/tips/${ex.img}.png"></img>
                    <p>${ex.explain}</p>
                </div>
            `).join("")
        }
        <hr>
    `)
}
