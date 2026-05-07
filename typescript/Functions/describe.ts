// Exercise 5.2 — describe
// Create an overloaded function called "describe" with these signatures:
// •	describe(name: string): string
// •	describe(name: string, age: number): string
// •	describe(name: string, age: number, city: string): string
// •	1 param  →  return "<name> has no details on file."
// •	2 params →  return "<name> is <age> years old."
// •	3 params →  return "<name> is <age> years old and lives in <city>."
// •	Test with: describe("Anna"), describe("Bob", 25), describe("Clara", 30, "Berlin")

function describe(name: string): string;
function describe(name: string, age: number): string;
function describe(name: string, age: number, city: string): string;

function describe(name: string, age?: number, city?: string): string {
    if (age !== undefined && city !== undefined) {
        return `${name} is ${age} years old and lives in ${city}.`;
    } else if (age !== undefined) {
        return `${name} is ${age} years old.`;
    } else {
        return `${name} has no details on file.`;
    }
}

console.log(describe("Anna"));
console.log(describe("Bob", 25));
console.log(describe("Clara", 30, "Berlin"));
