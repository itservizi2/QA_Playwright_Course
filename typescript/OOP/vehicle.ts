//Definiti interfata Vehicle cu vin (readonly string), brand (string) si metoda start(): void.
// Creati clasa Car care implementeaza Vehicle. Creati un obiect Car si apelati start().
// Incercati sa modificati vin dupa creare si observati eroarea TypeScript (lasati linia respectiva comentata).

interface Vehicle {
    readonly vin: string;
    brand: string;
    start(): void;
}

class Car implements Vehicle {
    readonly vin: string;
    brand: string;

    constructor(vin: string, brand: string) {
        this.vin = vin;
        this.brand = brand;
    }

    start(): void {
        console.log(`Car ${this.brand} with VIN ${this.vin} has started.`);
    }
}

const myCar = new Car("VIN123456789", "Toyota");

myCar.start();


