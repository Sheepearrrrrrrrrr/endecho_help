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