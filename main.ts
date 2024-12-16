basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {

        music.ringTone(Note.C)
        basic.pause(500)

        music.stopAllSounds()

        basic.showIcon(IconNames.Happy)
        basic.pause(1000)
        basic.clearScreen()

        led.setBrightness(255)
    }
})
