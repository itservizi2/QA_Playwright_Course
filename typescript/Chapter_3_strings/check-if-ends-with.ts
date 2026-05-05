// 8.Check if a string ends with a specific word using endsWith().

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence: string) => {
    rl.question('Enter the word to check: ', (word: string) => {
        if (sentence.endsWith(word)) {
            console.log(`Yes, the sentence ends with "${word}".`);
        } else {
            console.log(`No, the sentence does not end with "${word}".`);
        }
        rl.close();
    });
});

