// 5.Find the position of a word using indexOf().

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence: string) => {
    rl.question('Enter the word to find: ', (word: string) => {
        const position = sentence.indexOf(word);

        if (position === -1) {
            console.log(`The word "${word}" was not found in the sentence.`);
        } else {
            console.log(`The word "${word}" starts at position: ${position}`);
        }

        rl.close();
    });
});
