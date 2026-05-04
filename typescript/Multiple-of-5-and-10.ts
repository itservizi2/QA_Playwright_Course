//10.	Multiple of 5 and 10: Given a number, check if it’s a multiple of 5,
// and inside that check if it’s also a multiple of 10.

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

    if (num % 5 === 0) {
        console.log(`${num} is a multiple of 5.`);
        if (num % 10 === 0) {
            console.log(`${num} is also a multiple of 10.`);
        } else {
            console.log(`${num} is not a multiple of 10.`);
        }
    } else {
        console.log(`${num} is not a multiple of 5.`);
    }

    rl.close();
})();
