// Exercise 1.2 — createGreeting
// Write a named function called "createGreeting" that:
// •	Takes a required parameter "name" (string)
// •	Takes an optional parameter "title" (string)
// •	Takes a default parameter "punctuation" (string, default "!")
// •	If title is provided, return "Hello, <title> <name><punctuation>"
// •	If title is NOT provided, return "Hello, <name><punctuation>"
// •	Test with: ("John", "Mr.", "?"), ("Anna", "Dr."), ("Bob")

function createGreeting(name: string, title?: string, punctuation: string = "!"): string {
    if (title) {
        return `Hello, ${title} ${name}${punctuation}`;
    } else {
        return `Hello, ${name}${punctuation}`;
    }
}

console.log(createGreeting("John", "Mr.", "?"));
console.log(createGreeting("Anna", "Dr."));
console.log(createGreeting("Bob"));
