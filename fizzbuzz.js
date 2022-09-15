// ## `fizzbuzz.js`

// This is a classic interview question. Write a program that asks the user for a number. If the number is divisible by 3, the program logs "fizz". If the number is divisible by 5, log "buzz". If the number is divisible by 3 and 5, log "fizzbuzz".

const prompt = require('prompt-sync')({sigint: true});

let number = Number(prompt(`Please input your desired number: `));

console.log (number);
fb = "fizzbuzz"

if (number % 15 === 0) {
    console.log (`${fb}`)
} else if (number % 5 === 0) {
    console.log (`${fb.substring(0,4)}`)
} else if (number % 3 === 0) {
    console.log (`${fb.substring(4,)}`)
} else {
    console.log (`ERROR!`)
}
