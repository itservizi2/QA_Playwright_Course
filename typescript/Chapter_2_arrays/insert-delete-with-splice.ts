// 7.Insert and delete elements using splice.

let fruits: string[] = ["Apple", "Banana", "Cherry", "Date"];

console.log("Original array:", fruits);

fruits.splice(2, 0, "Mango", "Orange");
console.log("After insertion:", fruits);

fruits.splice(1, 2);
console.log("After deletion:", fruits);
