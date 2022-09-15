// Write a program that prompts the user for their age using the `prompt-sync` Node dependency.

// Then, using if statements, else if, and else statements, write code that displays a different message depending on the age given.

// | age |	message |
// | --- | --- |
// | less than 16 |	"You can't drive." |
// | 16 to 17	| "You can drive but not vote." |
// | 18 to 24	| "You can vote but not rent a car." |
// | 25 or older |	"You can do pretty much anything." |

const prompt = require('prompt-sync')({sigint: true});

let driversAge = Number(prompt(`Please enter your age: `))

console.log (driversAge)

if (driversAge < 16) {
    console.log (`You can't drive.`)
} else if (driversAge <= 17) {
    console.log(`You can drive but not vote.`)
} else if (driversAge <= 24) {
    console.log(`You can vote but not rent a car.`)
} else if (driversAge >= 25) {
    console.log (`You can do pretty much anything.`)
}

