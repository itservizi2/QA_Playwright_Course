// Topic 3: Arrow Functions
// Exercise 3.1 — power
// Create an arrow function assigned to a variable called "power":
// •	It takes two parameters: base (number) and exponent (number, default 2)
// •	It returns base raised to the exponent (use Math.pow or **)
// •	Test with: (3), (2, 5), (5, 3)


const power = (base: number, exponent: number = 2): number => {
    return Math.pow(base, exponent);

};

console.log(power(3));
console.log(power(2, 5));
console.log(power(5, 3));

