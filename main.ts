radio.setGroup(3)
basic.forever(function () {
    radio.sendValue("temp", input.temperature())
})
