/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Noah
 * Created on: March 2026
 * This program lights up different neopixels according to distance
*/

// variables needed
let distanceToObject: number = -67
let neopixelStrip: neopixel.Strip = null

// setting up
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// pressing Button A
input.onButtonPressed(Button.A, function () {
    // getting the distance
    distanceToObject = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters)
    basic.clearScreen()
    basic.showNumber(distanceToObject)
    basic.showString('cm')
    if (distanceToObject < 10) {
        // if distance is less than 10 cm
        basic.showIcon(IconNames.No)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    } 
    else {
        // if distance is more than or equal to 10 cm
        basic.showIcon(IconNames.Yes)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    }

    neopixelStrip.show()
    basic.clearScreen()
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showIcon(IconNames.Happy)
})

// pressing Button B
input.onButtonPressed(Button.B, function () {
    neopixelStrip.clear()
    neopixelStrip.show()
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
