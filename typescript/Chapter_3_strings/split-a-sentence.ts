// 10.Split a sentence into words using split() and remove leading/trailing spaces using trim().

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", (input) => {
    // Trim leading/trailing spaces
    const trimmedSentence = input.trim();

    const words = trimmedSentence.split(" ");

    console.log("Words in the sentence:", words);

    rl.close();
});
