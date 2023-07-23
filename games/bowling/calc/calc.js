$('#framesel input').on('change', function() {
    $("#frames").html("")
    $("#score").html(`Score: -`)
    max = parseInt($("input[name=frames]:checked", "#framesel").val())
    for (let x = 0; x < max - 1; x++) {
        $("#frames").append(`
        <div class="frame col-6 col-lg-4 mb-4 needs-validation">
            <label for="frame${x+1}" class="form-label"><b>Frame ${x+1}</b></label>
            <div class="input-group frimp" id="frame${x+1}">
                <input type="text" class="form-control text-center" placeholder="1st" aria-label="1st ball">
                <input type="text" class="form-control text-center" placeholder="2nd" aria-label="2nd ball">
            </div>
            <div class="invalid-tooltip">Please choose a unique and valid username.</div>
        </div>
        `)
    }
    $("#frames").append(`
        <div class="frame col-6 col-lg-4 mb-4">
            <label for="frame${max}" class="form-label"><b>Frame ${max}</b></label>
            <div class="input-group frimp" id="frame${max}">
                <input type="text" class="form-control text-center" placeholder="1st" aria-label="1st ball">
                <input type="text" class="form-control text-center" placeholder="2nd" aria-label="2nd ball">
                <input type="text" class="form-control text-center" placeholder="3rd" aria-label="3rd ball">
            </div>
        </div>
    `)
})

$("#frames").on("keyup", function() {
    let sheet = []
    $('.frimp input').each(function() {
        let mark = $(this).val()
        if (/[0-9X\/-]{1}/.test(mark)) {
            sheet.push(mark)
        }
    })

    if (sheet.length > (2 *parseInt($("input[name=frames]:checked", "#framesel").val()) - 1)) {
        let f = calc(sheet.join(""))
        $("#score").html(`Score: ${f[f.length - 1]}`)
    }
})

function calc(sheet) {
    let frames = []
    let score = 0

    toNum = (sheet, x) => {
        switch (sheet[x]) {
            case "X": return 10
            case "-": case undefined: return 0
            case "/": return 10 - sheet[x-1]
            default: return parseInt(sheet[x])
        }
    }

    convert = (sheet, x) => [
        toNum(sheet, x),
        toNum(sheet, x+1),
        toNum(sheet, x+2),
        toNum(sheet, sheet[x+2] != "X" ? x+3 : x+4)
    ]

    for (let x = 0; x < (sheet.length - 1) / 2; x++) {
        let [one, two, nextOne, nextTwo] = convert(sheet.split(""), x*2)
        frames.push(
            score +=
                one + two                          // score on both bowls in a frame.
                + (one + two >= 10 ? nextOne : 0)  // if spare, strike, or two strikes (last frame only), score on the 1st next throw
                + (one == 10 ? nextTwo : 0))       // if strike, score on the 2nd next throw
    }
    return frames
}
