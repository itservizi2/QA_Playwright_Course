//Creati o clasa Shape cu metoda area() care returneaza 0. Creati Rectangle (cu width, height) si Circle (cu radius),
// care suprascriu area() pentru a calcula corect aria (folositi Math.PI pentru cerc).
// Afisati aria pentru un dreptunghi 4×5 si un cerc cu raza 3.


class Shape {
    area(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    override area(): number {
        return this.width * this.height;
    }
}


class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    override area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const rect = new Rectangle(4, 5);
console.log("Aria dreptunghiului 4x5:", rect.area());

const circ = new Circle(3);
console.log("Aria cercului cu raza 3:", circ.area());
