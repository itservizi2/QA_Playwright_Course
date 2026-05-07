// Exercise 6.4 — laptop1 & laptop2 (showing repetition problem)
// Create TWO laptop variables using the SAME inline type structure to show why repeating the type is painful:
// •	Type fields: brand: string, ram: number, storage: number, isAvailable: boolean, getSpecs: () => string
// •	getSpecs() returns "<brand> — <ram>GB RAM, <storage>GB storage — available: <isAvailable>"
// •	Create laptop1 = { brand: "Dell", ram: 16, storage: 512, isAvailable: true }
// •	Create laptop2 = { brand: "HP", ram: 8, storage: 256, isAvailable: false }
// •	Call getSpecs() on both and log the result

let laptop1: {
    brand: string;
    ram: number;
    storage: number;
    isAvailable: boolean;
    getSpecs: () => string;
} = {
    brand: "Dell",
    ram: 16,
    storage: 512,
    isAvailable: true,
    getSpecs: function(): string {
        return `${this.brand} — ${this.ram}GB RAM, ${this.storage}GB storage — available: ${this.isAvailable}`;
    }
};

let laptop2: {
    brand: string;
    ram: number;
    storage: number;
    isAvailable: boolean;
    getSpecs: () => string;
} = {
    brand: "HP",
    ram: 8,
    storage: 256,
    isAvailable: false,
    getSpecs: function(): string {
        return `${this.brand} — ${this.ram}GB RAM, ${this.storage}GB storage — available: ${this.isAvailable}`;
    }
};

console.log(laptop1.getSpecs());
console.log(laptop2.getSpecs());
