// Topic 6: Objects — Way 3: Type Aliases
// Exercise 6.5 — Animal type alias
// Define a type alias "Animal" and reuse it across multiple objects:
// •	Type Animal: name: string, species: string, age: number, makeSound: () => string
// •	Create three Animal objects: dog, cat, cow — each with its own makeSound() implementation
// •	Loop through an array of the three animals and log makeSound() for each


type Animal = {
    name: string;
    species: string;
    age: number;
    makeSound: () => string;
};

const dog: Animal = {
    name: "Buddy",
    species: "Dog",
    age: 5,
    makeSound: () => "Woof!"
};

const cat: Animal = {
    name: "Whiskers",
    species: "Cat",
    age: 3,
    makeSound: () => "Meow!"
};

const cow: Animal = {
    name: "Bessie",
    species: "Cow",
    age: 7,
    makeSound: () => "Moo!"
};

const animalss: Animal[] = [dog, cat, cow];

for (const animal of animalss) {
    console.log(`${animal.name} the ${animal.species} says: ${animal.makeSound()}`);
}



