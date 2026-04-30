//7. Positive and even: Given a number, check if it’s positive, and if yes, 
// check if it’s even.

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askNumber() {
  rl.question("Enter a number: ", (input) => {
    const num = Number(input);

    if (isNaN(num)) {
      console.log("Invalid input. Please enter a valid number.");
      askNumber();
    } else {
      if (num > 0) {
        console.log("The number is positive.");
        if (num % 2 === 0) {
          console.log("The number is also even.");
        } else {
          console.log("The number is not even.");
        }
      } else {
        console.log("The number is not positive.");
      }
      rl.close(); 
    }
  });
}

askNumber();

