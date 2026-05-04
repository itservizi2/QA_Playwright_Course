// 13.	Month name: Given a month number (1–12), print the month name (or “Invalid month”).

import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askValidMonth(query: string): Promise<number> {
    return new Promise((resolve) => {
        const ask = () => {
            rl.question(query, (answer) => {
                const num = Number(answer);
                if (!isNaN(num) && Number.isInteger(num) && num >= 1 && num <= 12) {
                    resolve(num);
                } else {
                    console.log("Invalid input. Please enter a number between 1 and 12.");
                    ask();
                }
            });
        };
        ask();
    });
}

(async () => {
    const monthNumber = await askValidMonth("Enter a month number (1–12): ");

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    console.log(`Month ${monthNumber} is ${months[monthNumber - 1]}.`);

    rl.close();
})();
