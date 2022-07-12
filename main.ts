input.onButtonPressed(Button.A, function () {
    tcs3200.calibration(
    DigitalPin.P15,
    DigitalPin.P1,
    DigitalPin.P8,
    DigitalPin.P12,
    DigitalPin.P2,
    50
    )
    cal = false
})
let red = 0
let blue = 0
let green = 0
let cal = false
cal = true
basic.forever(function () {
    if (!(cal)) {
        green = tcs3200.color_choice(color.green)
        blue = tcs3200.color_choice(color.blue)
        red = tcs3200.color_choice(color.red)
    }
    if (red > 200) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
