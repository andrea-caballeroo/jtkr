input.onButtonPressed(Button.A, function () {
    basic.showNumber(Celsius)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Celsius)
    basic.showIcon(IconNames.Sad)
})
let Celsius = 0
basic.showString("Andrea")
basic.showString("A01285580")
Celsius = input.temperature()
basic.forever(function () {
	
})
