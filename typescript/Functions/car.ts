// Topic 6: Objects — Way 1: Using "object" type
// Exercise 6.1 — car (object literal)
// Create a variable "car" using the plain object literal style (no type annotation):
// •	Properties: brand (string), model (string), year (number), price (number)
// •	Method: getDescription() — returns "<brand> <model> (<year>) costs <price>"
// •	Access the properties using BOTH dot notation and bracket notation and log them
// •	Modify the price using dot notation, then log the new price
// •	Test with: car = { brand: "Toyota", model: "Corolla", year: 2022, price: 18000 }

// Create the car object using plain object literal (no type annotation)
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: 18000,
    getDescription: function(): string {
        return `${this.brand} ${this.model} (${this.year}) costs ${this.price}`;
    }
};

console.log(car.brand);
console.log(car.model);

console.log(car["year"]);
console.log(car["price"]);

console.log(car.getDescription());

car.price = 20000;
console.log(car.price);

console.log(car.getDescription());
