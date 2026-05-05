// 8.Find the index of a specific element using indexOf.

const colors: string[] = ["Red", "Green", "Blue", "Yellow", "Purple"];

const searchElement: string = "Blue";
const index: number = colors.indexOf(searchElement);

if (index !== -1) {
    console.log(`Element "${searchElement}" found at index: ${index}`);
} else {
    console.log(`Element "${searchElement}" not found in the array.`);
}
