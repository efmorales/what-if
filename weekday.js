// Write a program that prompts the user for a number, then displays the appropriate day of the week according to the table below.

// | number | day |
// | --- | --- |
// | 1 | Monday |
// | 2 | Tuesday |
// | 3 | Wednesday |
// | 4 | Thursday |
// | 5 | Friday |
// | 6 | Saturday |
// | 7 | Sunday |
// | anything else | "error" |

const prompt = require('prompt-sync')({sigint: true});

let theDay = Number(prompt(`Please select the number corresponding to the relevant weekday: `))

console.log(theDay)

if (theDay === 1){
    console.log(`Monday`)
} else if (theDay === 2) {
    console.log (`Tuesday`)
} else if (theDay === 3) {
    console.log (`Wednesday`)
} else if (theDay === 4) {
    console.log (`Thursday`)
} else if (theDay === 5) {
    console.log (`Friday`)
} else if (theDay === 6) {
    console.log (`Saturday`)
} else if (theDay === 7) {
    console.log (`Sunday`)
} else {
    console.log (`error`)
}