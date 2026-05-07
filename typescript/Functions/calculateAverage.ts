// Exercise 1.1 — calculateAverage
// Write a named function called "calculateAverage" that:
// •	Accepts a rest parameter of numbers (...nums: number[])
// •	Returns the average of all numbers passed in
// •	Test it with: (10, 20, 30), (5, 15), and (100)

function calculateAverage(...nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("At least one number must be provided");
    }
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return sum / nums.length;
}

console.log(calculateAverage(10, 20, 30));
console.log(calculateAverage(5, 15));
console.log(calculateAverage(100));
