// 7.Check if a string starts with a specific word using startsWith().

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence: string) => {
    rl.question('Enter the word to check: ', (word: string) => {
        if (sentence.startsWith(word)) {
            console.log(`Yes, the sentence starts with "${word}".`);
        } else {
            console.log(`No, the sentence does not start with "${word}".`);
        }
        rl.close();
    });
});
