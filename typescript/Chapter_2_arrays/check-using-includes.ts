// 9.Check if an element exists in an array using includes.

const animals: string[] = ["Dog", "Cat", "Elephant", "Tiger", "Lion"];

const searchElement: string = "Tiger";

if (animals.includes(searchElement)) {
    console.log(`Element "${searchElement}" exists in the array.`);
} else {
    console.log(`Element "${searchElement}" does not exist in the array.`);
}
