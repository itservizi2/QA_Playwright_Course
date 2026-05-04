// 14.	Simple calculator: Given an operator (+ - * /) and two numbers,
// print the result (or “Invalid operator”).

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askValidNumber(query: string): Promise<number> {
    return new Promise((resolve) => {
        const ask = () => {
            rl.question(query, (answer) => {
                const num = Number(answer);
                if (!isNaN(num)) {
                    resolve(num);
                } else {
                    console.log("Invalid input. Please enter a valid number.");
                    ask(); // repeat until valid
                }
            });
        };
        ask();
    });
}

function askValidOperator(query: string): Promise<string> {
    return new Promise((resolve) => {
        const validOperators = ["+", "-", "*", "/"];
        const ask = () => {
            rl.question(query, (answer) => {
                if (validOperators.includes(answer)) {
                    resolve(answer);
                } else {
                    console.log("Invalid operator. Please enter one of +, -, *, /.");
                    ask(); // repeat until valid
                }
            });
        };
        ask();
    });
}

(async () => {
    const operator = await askValidOperator("Enter an operator (+, -, *, /): ");
    const num1 = await askValidNumber("Enter the first number: ");
    const num2 = await askValidNumber("Enter the second number: ");

    let result: number;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("Division by zero is not allowed.");
                rl.close();
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator.");
            rl.close();
            return;
    }

    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);

    rl.close();
})();
