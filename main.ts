let startTime = 0
let soundPlaying = false

input.onButtonPressed(Button.A, function () {
    soundPlaying = true
    basic.showLeds(`
        # # # # #
        . # . # .
        . . # . .
        . # . # .
        # # # # #
    `)

    basic.pause(Math.randomRange(1000, 5000))

    music.playTone(Note.C, 500)
    startTime = input.runningTime()
    basic.showString("Wait...")
})

Sensors.OnLightDrop(function () {
    if (soundPlaying) {
        soundPlaying = false
        let reactionTime = input.runningTime() - startTime


        if (reactionTime < 0) { 
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
            `)
        } else {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
            `)
        }

        let adjustedTime = reactionTime - 500
        basic.pause(1000)
        basic.showNumber(adjustedTime)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})

basic.forever(function () { 

})