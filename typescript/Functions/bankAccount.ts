// Exercise 6.2 — bankAccount (object literal with method)
// Create a variable "bankAccount" as an object literal:
// •	Properties: owner (string), balance (number)
// •	Method: deposit(amount) — increases the balance and returns the new balance
// •	Method: withdraw(amount) — decreases the balance only if there are enough funds, else logs "Insufficient funds"
// •	Test with: deposit(500), withdraw(200), withdraw(10000)

let bankAccount = {
    owner: "Alex",
    balance: 1000,

    deposit(amount: number): number {
        this.balance += amount;
        return this.balance;
    },

    withdraw(amount: number): number | void {
        if (amount <= this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            console.log("Insufficient funds");
        }
    }
};

console.log("Initial balance:", bankAccount.balance);

console.log("After deposit:", bankAccount.deposit(500));
console.log("After withdraw:", bankAccount.withdraw(200));
bankAccount.withdraw(10000);
