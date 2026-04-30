//3.	Teenager check: Given an age, print if the person is a teenager (13–19), otherwise not.

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter age: ", (input: string) => {
    const age: number = Number(input);

    if (Number.isNaN(age)) {
        console.log("Please enter a valid number.");
    } else if (age >= 13 && age <= 19) {
        console.log("The person is a teenager.");
    } else {
        console.log("The person is not a teenager.");
    }

    rl.close();
});


