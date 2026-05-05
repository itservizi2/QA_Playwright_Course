// 6.Check if a string includes a word using includes().

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence: string) => {
    rl.question('Enter the word to check: ', (word: string) => {
        if (sentence.includes(word)) {
            console.log(`Yes, the sentence includes the word "${word}".`);
        } else {
            console.log(`No, the sentence does not include the word "${word}".`);
        }
        rl.close();
    });
});
