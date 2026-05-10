// Creati clasa Rectangle cu doua semnaturi de constructor: una fara parametri (creeaza un patrat 1×1) si una cu width si height.
// Adaugati metoda area() care returneaza width × height. Creati cate un obiect din fiecare forma si afisati aria.

class Rectangle {
    private width: number;
    private height: number;


    constructor();

    constructor(width: number, height: number);

    constructor(width?: number, height?: number) {
        if (width !== undefined && height !== undefined) {
            this.width = width;
            this.height = height;
        } else {
            this.width = 1;
            this.height = 1;
        }
    }

    area(): number {
        return this.width * this.height;
    }
}

const square = new Rectangle();
console.log("Aria patratului 1×1:", square.area());

const rect = new Rectangle(4, 5);
console.log("Aria dreptunghiului 4×5:", rect.area());
