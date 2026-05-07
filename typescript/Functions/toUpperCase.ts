// Exercise 2.1 — toUpperCase
// Create an anonymous function assigned to a variable called "toUpperCase":
// •	It takes a string parameter
// •	It returns the string converted to upper case
// •	Test it with: "hello world", "typescript"


const toUpperCase = function(str: string): string {
    return str.toUpperCase();
};

console.log(toUpperCase("hello world"));
console.log(toUpperCase("typescript"));

