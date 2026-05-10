//Creati o clasa BankAccount cu proprietatea publica name (numele titularului) si proprietatea privata balance (soldul, initial 0).
// Adaugati doua metode publice: deposit(amount) care adauga suma la balance, si getBalance() care returneaza balance.
// Creati un obiect, faceti doua depuneri si afisati soldul.

class BankAccount {
	public name: string;
	private balance: number;

	constructor(name: string) {
		this.name = name;
		this.balance = 0;
	}

	public deposit(amount: number): void {
		if (amount > 0) {
			this.balance += amount;
			console.log(`Depunere: ${amount} lei efectuată cu succes.`);
		} else {
			console.log("Suma trebuie să fie pozitivă.");
		}
	}

	public getBalance(): number {
		return this.balance;
	}
}

const account = new BankAccount("Alex");

account.deposit(500);

account.deposit(300);

console.log(`Soldul curent al contului este: ${account.getBalance()} lei`);
