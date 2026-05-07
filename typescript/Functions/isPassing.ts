// Exercise 2.2 — isPassing
// Create an anonymous function assigned to a variable called "isPassing":
// •	It takes a number parameter (score)
// •	It returns true if the score is >= 50, false otherwise
// •	Test it with: 75, 40, 50

const isPassing = function(score: number): boolean {
    return score >= 50;
};

console.log(isPassing(75));
console.log(isPassing(40));
console.log(isPassing(50));
