//3.Largest digit — Given a number, find the largest digit inside it using a while loop.

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askNumber(): void {
    rl.question("Enter an integer: ", (input) => {

        if (!/^-?\d+$/.test(input)) {
            console.log(" Invalid input. Please enter a valid integer.");
            askNumber();
            return;
        }
        let num: number = Math.abs(parseInt(input));
        let largestDigit: number = 0;

        if (num === 0) {
            largestDigit = 0;
        } else {
            while (num > 0) {
                let digit: number = num % 10;
                if (digit > largestDigit) {
                    largestDigit = digit;
                }
                num = Math.floor(num / 10);
            }
        }

        console.log(" Largest digit is:", largestDigit);
        rl.close();
    });
}
askNumber();
