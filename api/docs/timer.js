const setTimerExample1 = () => {
    setTimeout(() => {
        console.log("1 Sec Timer")
    }, 1000)
}
const setTimerExample2 = () => {
    setTimeout(() => {
        console.log("1.5 Sec Timer")
    }, 1500)
}
const setTimerExample3 = () => {
    setTimeout(() => {
        console.log("2 Sec Timer")
    }, 2000)
}
setTimerExample3()
setTimerExample2()
setTimerExample1()

const setIntervalExample = () => {
    setInterval(() => {
        console.log("1 Sec Timer")
    }, 1000)
}
// setIntervalExample()
let i = 0;
const watch = () => {
    setInterval(() => {
        console.log(i++)
    }, 1000)
}
watch()

/**
 * setInterval has a property of a loop as it continuously repeats the content at a interval of choice
 * setTimeout lets us print the result with a delay of time
 * setImmediate voids all timer value given to it and executes at the start of the program
 * }?
 */






