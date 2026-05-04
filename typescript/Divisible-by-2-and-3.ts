// 12.	Divisible by 2 and 3: Given a number, print:
// ●	divisible by both 2 and 3
// ●	divisible by 2 only
// ●	divisible by 3 only
// ●	divisible by neither

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
                    ask(); // repeat until valid
                }
            });
        };
        ask();
    });
}

(async () => {
    const num = await askValidNumber("Enter a number: ");

    if (num % 2 === 0 && num % 3 === 0) {
        console.log(`${num} is divisible by both 2 and 3.`);
    } else if (num % 2 === 0) {
        console.log(`${num} is divisible by 2 only.`);
    } else if (num % 3 === 0) {
        console.log(`${num} is divisible by 3 only.`);
    } else {
        console.log(`${num} is divisible by neither 2 nor 3.`);
    }

    rl.close();
})();
