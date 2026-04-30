//8.	Uppercase vowel: Given a character, check if it’s uppercase, and if yes, 
// check if it’s a vowel (A, E, I, O, U).

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a character: ", (char) => {
  if (char.length !== 1) {
    console.log("Please enter exactly one character.");
  } else {
    if (char >= "A" && char <= "Z") {

      const vowels = ["A", "E", "I", "O", "U"];
      if (vowels.includes(char)) {
        console.log(`${char} is an uppercase vowel.`);
      } else {
        console.log(`${char} is uppercase but not a vowel.`);
      }
    } else {
      console.log(`${char} is not uppercase.`);
    }
  }
  rl.close();
});




