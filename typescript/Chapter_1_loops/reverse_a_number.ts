// 2.Reverse a number — Given an integer, reverse its digits (e.g., 12345 → 54321) using a while loop.
// Reverse a number using while loop

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber(): void {
    rl.question("Enter an integer: ", (input) => {
        if (!/^-?\d+$/.test(input)) {
            console.log("Invalid input. Please enter a valid integer.");
            askNumber();
            return;
        }

        let num: number = parseInt(input);
        let reversed: number = 0;
        let temp: number = Math.abs(num);

        while (temp !== 0) {
            let digit: number = temp % 10;
            reversed = reversed * 10 + digit;
            temp = Math.floor(temp / 10);
        }

        if (num < 0) {
            reversed = -reversed;
        }

        console.log("Reversed number:", reversed);
        rl.close();
    });
}
askNumber();


