// 15.	Season by month: Given a month number, print the season
// (Winter/Spring/Summer/Autumn) using a switch with grouped cases.

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
                    ask(); // repeat until valid
                }
            });
        };
        ask();
    });
}

(async () => {
    const monthNumber = await askValidMonth("Enter a month number (1–12): ");

    let season: string;

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            season = "Invalid month";
    }

    console.log(`Month ${monthNumber} is in ${season}.`);

    rl.close();
})();
