// 1.Find the length of a string.

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input: string) => {
    console.log(`The length of the string is: ${input.length}`);
    rl.close();
});
