//1.	Uppercase check: Given a character, print if it’s an uppercase letter (A–Z).

import * as readline from 'readline';

function isLetter(char: string): boolean {
    return /^[A-Za-z]$/.test(char);
}

function isUppercase(char: string): boolean {
    return char >= 'A' && char <= 'Z';
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a character: ", (answer) => {
    if (answer.length !== 1) {
        console.error("Error: Please enter exactly one character.");
    } else if (!isLetter(answer)) {
        console.error("Error: The character entered is not a letter.");
    } else {
        const result = isUppercase(answer);
        console.log(`${answer} is uppercase: ${result}`);
    }
    rl.close();
});



