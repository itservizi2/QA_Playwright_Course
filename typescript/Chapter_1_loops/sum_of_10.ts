//1.Sum first 10 natural numbers — Use while to compute 1 + 2 + ... + 10.


let num: number = 1;
let summm: number = 0;

while (num <= 10) {
    summm += num;
    num++;
}

console.log("The sum of the first 10 natural numbers is:", summm);
