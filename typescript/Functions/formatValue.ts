// Topic 5: Overloaded Functions
// Exercise 5.1 — formatValue
// Create an overloaded function called "formatValue" with these signatures:
// •	formatValue(value: number): string  →  returns the number with 2 decimal places as string
// •	formatValue(value: string): string  →  returns the string in upper case
// •	Test with: formatValue(3.14159) and formatValue("hello")

function formatValue(value: number): string;
function formatValue(value: string): string;

function formatValue(value: number | string): string {
    if (typeof value === "number") {
        return value.toFixed(2);
    } else {
        return value.toUpperCase();
    }
}

console.log(formatValue(3.14159));
console.log(formatValue("hello"));
