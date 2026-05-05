// 9.Replace a word in a sentence using replace().

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence: string) => {
    rl.question('Enter the word to replace: ', (oldWord: string) => {
        rl.question('Enter the new word: ', (newWord: string) => {
            const updatedSentence = sentence.replace(oldWord, newWord);
            console.log(`Updated sentence: ${updatedSentence}`);
            rl.close();
        });
    });
});
