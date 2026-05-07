// // Arrow function with rest parameter and implicit return
// const joinNames = (...names: string[]): string => names.join(", ");
//
// // Testing the function
// console.log(joinNames("Alice", "Bob", "Charlie")); // Expected: "Alice, Bob, Charlie"
// console.log(joinNames("John"));                    // Expected: "John"


const joinNames = (...names: string[]): string => names.join(", ");

console.log(joinNames("Alice", "Bob", "Charlie"));
console.log(joinNames("John"));
