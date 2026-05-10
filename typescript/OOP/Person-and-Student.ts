//Creati o clasa Person cu name (public) si age (protected). Apoi clasa Student care extinde Person,
// primeste in plus studentId (private), si are o metoda publica showInfo() care afiseaza numele,
//  varsta si studentId. Creati un obiect Student si apelati showInfo().

class Person {
	public name: string;
	protected age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

class Student extends Person {
	private studentId: string;

	constructor(name: string, age: number, studentId: string) {
		super(name, age);
		this.studentId = studentId;
	}

	public showInfo(): void {
		console.log(`Name: ${this.name}`);
		console.log(`Age: ${this.age}`);
		console.log(`Student ID: ${this.studentId}`);
	}
}

const student = new Student("John", 21, "ST12345");
student.showInfo();
