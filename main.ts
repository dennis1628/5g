pins.servoWritePin(AnalogPin.P8, 90)
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(16000)
basic.showLeds(`
    # # # . .
    # . # . .
    # # # . #
    . . # # .
    . . # . #
    `)
basic.forever(function () {
    basic.showString("Hum%:" + Math.round(pins.analogReadPin(AnalogPin.P2) / 600 * 100))
    basic.showString("Temp:" + pins.analogReadPin(AnalogPin.P3))
    if (pins.analogReadPin(AnalogPin.P2) < 100) {
        serial.writeString("Moisture Sensor Value :" + convertToText(pins.analogReadPin(AnalogPin.P2)))
        pins.servoWritePin(AnalogPin.P8, 180)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P8, 90)
        basic.pause(10000)
    } else {
        serial.writeString("Moisture Sensor Value :" + convertToText(pins.analogReadPin(AnalogPin.P2)))
        pins.servoWritePin(AnalogPin.P8, 90)
        basic.pause(4000)
    }
})
