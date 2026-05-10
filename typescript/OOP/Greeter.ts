// Creati clasa Greeter cu metoda greet supraincarcata: greet() → "Hello!"; greet(name) → "Hello, !";
// greet(name, lang) → daca lang === "fr" returneaza "Bonjour, !", altfel "Hello, !". Apelati toate cele trei variante.

class Greeter {

    greet(): string;
    greet(name: string): string;
    greet(name: string, lang: string): string;

    greet(name?: string, lang?: string): string {
        if (name && lang) {
            if (lang === "fr") {
                return `Bonjour, ${name}!`;
            } else {
                return `Hello, ${name}!`;
            }
        } else if (name) {
            return `Hello, ${name}!`;
        } else {
            return "Hello!";
        }
    }
}

const greeter = new Greeter();

console.log(greeter.greet());
console.log(greeter.greet("Ashley"));
console.log(greeter.greet("Marie", "fr"));
console.log(greeter.greet("John", "en"));
