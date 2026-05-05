// 4.Get a character at a specific index using charAt().

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input: string) => {
    rl.question('Enter an index: ', (indexStr: string) => {
        const index = parseInt(indexStr, 10);

        if (isNaN(index) || index < 0 || index >= input.length) {
            console.log('Invalid index. Please enter a number between 0 and ' + (input.length - 1));
        } else {
            const charAtIndex = input.charAt(index);
            console.log(`Character at index ${index}: ${charAtIndex}`);
        }

        rl.close();
    });
});
