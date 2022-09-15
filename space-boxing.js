// Julio Cesar Chavez Mark VII is an interplanetary space boxer, who currently holds the championship belts for various weight categories on many different planets within our solar system. However, it is often difficult for him to recall what his "target weight" needs to be on earth in order to make the weight class on other planets. Write a program to help him keep track of this.

// It should ask him what his earth weight is, and to enter a number for the planet he wants to fight on. It should then compute his weight on the destination planet based on the table below:

// | # |	Planet	| Relative gravity |
// | --- | --- | --- |
// | 1 |	Venus |	0.78 |
// | 2 |	Mars  | 0.39 |
// | 3 |	Jupiter |	2.65 |
// | 4 |	Saturn | 1.17 |
// | 5 |	Uranus | 1.05 |
// | 6 |	Neptune |	1.23 |

// So, for example, if Julio weighs 128 lbs. on earth, then he would weigh just under 50 lbs. on Mars, since Mars' gravity is 0.39 times earth's gravity. (128 * 0.39 is 49.92).

const prompt = require('prompt-sync')({sigint: true});

weight = Number(prompt(`Enter your earth weight: `))

console.log (`Please enter the corresponding number according to the planet you will be traveling to (1-Venus, 2-Mars, 3-Jupiter, 4-Saturn, 5-Uranus, 6-Neptune): `)

gravity = Number(prompt(`> `))

result = 0

if (gravity === 1) {
    gravity = 0.78
    console.log(`You picked Venus.`)
    console.log(`Your weight needs to be ${weight * gravity}`)
} else if (gravity === 2) {
    gravity = 0.39
    console.log(`You picked Mars.`)
    console.log(`Your weight needs to be ${weight * gravity}`)
} else if (gravity === 3) {
    gravity = 2.65
    console.log(`You picked Jupiter.`)
    console.log(`Your weight needs to be ${weight * gravity}`)
} else if (gravity === 4) {
    gravity = 1.17
    console.log(`You picked Saturn.`)
    console.log(`Your weight needs to be ${weight * gravity}`)
} else if (gravity === 5) {
    gravity = 1.05
    console.log(`You picked Uranus.`)
    console.log(`Your weight needs to be ${weight * gravity}`)
} else if (gravity === 6) {
    gravity = 1.23
    console.log(`You picked Neptune.`)
    console.log(`Your weight needs to be ${weight * gravity}`)
}