// Topic 6: Objects — Way 4: Using Classes
// Exercise 6.7 — Rectangle class
// Create a class "Rectangle" with a constructor and two methods:
// •	Properties: width (number), height (number)
// •	Constructor takes width and height
// •	Method getArea(): number — returns width * height
// •	Method getPerimeter(): number — returns 2 * (width + height)
// •	Create three rectangles and log area + perimeter for each

class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(7, 3);
const rect3 = new Rectangle(12, 4);

console.log(`Rectangle 1 → Area: ${rect1.getArea()}, Perimeter: ${rect1.getPerimeter()}`);
console.log(`Rectangle 2 → Area: ${rect2.getArea()}, Perimeter: ${rect2.getPerimeter()}`);
console.log(`Rectangle 3 → Area: ${rect3.getArea()}, Perimeter: ${rect3.getPerimeter()}`);
