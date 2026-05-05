// 12.Filter out even numbers from an array using filter.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers: number[] = numbers.filter(num => num % 2 !== 0);

console.log("Original array:", numbers);
console.log("Filtered array (odd numbers only):", oddNumbers);



