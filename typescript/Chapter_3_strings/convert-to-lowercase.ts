// 3.Convert a string to lowercase using toLowerCase.

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input: string) => {
    const lowercased = input.toLowerCase();
    console.log(`Lowercase version: ${lowercased}`);
    rl.close();
});
