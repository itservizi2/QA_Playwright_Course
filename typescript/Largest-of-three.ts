//9.	Largest of three: Given three numbers, print the largest one.

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askValidNumber(query: string): Promise<number> {
    return new Promise((resolve) => {
        const ask = () => {
            rl.question(query, (answer) => {
                const num = Number(answer);
                if (!isNaN(num)) {
                    resolve(num);
                } else {
                    console.log("Invalid input. Please enter a valid number.");
                    ask(); 
                }
            });
        };
        ask();
    });
}

(async () => {
    const num1 = await askValidNumber("Enter the first number: ");
    const num2 = await askValidNumber("Enter the second number: ");
    const num3 = await askValidNumber("Enter the third number: ");

    const largest = Math.max(num1, num2, num3);

    console.log(`The largest number is: ${largest}`);

    rl.close();
    process.exit(0);
})();
