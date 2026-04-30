//2.	Multiple of 10: Given a number, print if it’s divisible by 10.

import * as readline from 'readline';

function isMultipleOf10(num: number): boolean {
    return num % 10 === 0;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (answer) => {
    const parsed = Number(answer);

    if (isNaN(parsed)) {
        console.error("Error: Please enter a valid number.");
    } else {
        const result = isMultipleOf10(parsed);
        console.log(`${parsed} is divisible by 10: ${result}`);
    }

    rl.close();
});
