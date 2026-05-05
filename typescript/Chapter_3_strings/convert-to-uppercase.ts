// 2.Convert a string to uppercase using toUpperCase.

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input: string) => {
    const uppercased = input.toUpperCase();
    console.log(`Uppercase version: ${uppercased}`);
    rl.close();
});
