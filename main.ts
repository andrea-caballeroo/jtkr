input.onButtonPressed(Button.A, function () {
    basic.showNumber(Celsius)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Kelvin)
    basic.showIcon(IconNames.Confused)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Fahrenheit)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.clearScreen()
})
let Kelvin = 0
let Fahrenheit = 0
let Celsius = 0
basic.showString("Andrea")
basic.showString("A01285580")
Celsius = input.temperature()
Fahrenheit = Celsius * 1.8 + 32
Kelvin = Celsius + 273.15
