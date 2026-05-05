// 1.Add an element to the end of an array using push.

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr: string[] = ["apple", "banana", "cherry"];

console.log("Initial array:", arr);

rl.question("Enter an element to add: ", (input) => {
    arr.push(input);
    console.log("Updated array:", arr);
    rl.close();
});
