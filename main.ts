input.onButtonPressed(Button.A, function () {
    if (npersonas <= 0) {
        npersonas += 0
    } else {
        npersonas += -1
        basic.showString("" + (npersonas))
    }
})
input.onButtonPressed(Button.AB, function () {
    npersonas = 0
    basic.showString("" + (npersonas))
})
input.onButtonPressed(Button.B, function () {
    npersonas += 1
    basic.showString("" + (npersonas))
})
let npersonas = 0
npersonas = 0
basic.forever(function () {
	
})
