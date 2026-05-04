// 11.	Vowel or consonant: Given a character, print whether it’s a vowel or consonant
// (handle both lowercase and uppercase vowels).

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askValidCharacter(query: string): Promise<string> {
    return new Promise((resolve) => {
        const ask = () => {
            rl.question(query, (answer) => {
                if (answer.length === 1 && /^[a-zA-Z]$/.test(answer)) {
                    resolve(answer);
                } else {
                    console.log("Invalid input. Please enter a single alphabetic character.");
                    ask();
                }
            });
        };
        ask();
    });
}

(async () => {
    const char = await askValidCharacter("Enter a character: ");
    const vowels = ["a", "e", "i", "o", "u"];

    if (vowels.includes(char.toLowerCase())) {
        console.log(`${char} is a vowel.`);
    } else {
        console.log(`${char} is a consonant.`);
    }

    rl.close();
})();
