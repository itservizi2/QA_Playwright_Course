//4.	Larger number: Given two numbers, print which one is larger.

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askForNumber(prompt: string): Promise<number> {
    return new Promise((resolve) => {
        const ask = () => {
            rl.question(prompt, (input) => {
                const num = Number(input);
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
    const num1 = await askForNumber("Enter the first number: ");
    const num2 = await askForNumber("Enter the second number: ");

    if (num1 > num2) {
        console.log(`The larger number is: ${num1}`);
    } else if (num2 > num1) {
        console.log(`The larger number is: ${num2}`);
    } else {
        console.log("Both numbers are equal.");
    }

    rl.close();
})();


