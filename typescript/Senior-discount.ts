//6.	Senior discount: Given an age, print if the person is eligible for a senior discount (age ≥ 60).

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askAge(): void {
    rl.question("Please enter your age: ", (answer) => {
        const age = parseInt(answer, 10);

        if (isNaN(age) || age < 0) {
            console.log("Invalid input. Please enter a valid non-negative number.");
            askAge();
        } else {
            if (age >= 60) {
                console.log("You are eligible for a senior discount.");
            } else {
                console.log("You are not eligible for a senior discount.");
            }
            rl.close();
        }
    });
}

askAge();

