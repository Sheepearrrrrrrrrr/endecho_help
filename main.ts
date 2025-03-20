/* ============= PROGRAM 1 START ============= */
function lightemup1() {
    let index = 0
    for (let i of list1) {
        for (let j = 4; j >= i; j--) {
            led.plot(index, j)
        }
        index++;
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let toSend = ""
    lightemup1()
    for (let i of list1) {
        toSend += i;
    }
    radio.sendString(toSend)
})

let list1: number[] = [randint(0, 4), randint(0, 4), randint(0, 4), randint(0, 4), randint(0, 4)]
radio.setGroup(147)
/* ============= PROGRAM 1 END ============= */
/* ============= PROGRAM 2 START ============= */
function lightemup2() {
    let index = 0
    for (let i of list2) {
        for (let j = 4; j >= i; j--) {
            led.plot(index, j)
        }
        index++;
    }
}

radio.onReceivedString(function (receivedString) {
    for (let i of receivedString) {
        list2.push(parseInt(i))
    }
    lightemup2()
})
let list2: number[] = []
radio.setGroup(147)
/* ============= PROGRAM 2 END ============= */
