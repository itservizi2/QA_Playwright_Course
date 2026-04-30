//5.	Sign check: Given a number, print whether it is positive, negative, or zero.

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askNumber(): void {
  rl.question("Enter a number: ", (answer) => {
    const num = Number(answer);

    if (isNaN(num)) {
      console.log("Invalid input. Please enter a valid number.");
      askNumber();
    } else {
      if (num > 0) {
        console.log("The number is positive.");
      } else if (num < 0) {
        console.log("The number is negative.");
      } else {
        console.log("The number is zero.");
      }
      rl.close();
    }
  });
}

askNumber();

