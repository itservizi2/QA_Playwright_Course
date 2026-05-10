//Creati o clasa Animal cu proprietatea name si metoda sound() care afiseaza "Some sound...".
// Creati apoi doua subclase: Dog si Cat. Suprascrieti sound() in fiecare astfel incat Dog sa
//  afiseze "Woof!", iar Cat "Meow!". Creati cate un obiect din fiecare si apelati sound().

class Animal {
	public name: string;

	constructor(name: string) {
		this.name = name;
	}

	public sound(): void {
		console.log("Some sound...");
	}
}

class Dog extends Animal {
	public sound(): void {
		console.log("Woof!");
	}
}

class Cat extends Animal {
	public sound(): void {
		console.log("Meow!");
	}
}

const dog = new Dog("Rex");
const cat = new Cat("Mia");

dog.sound();
cat.sound();
