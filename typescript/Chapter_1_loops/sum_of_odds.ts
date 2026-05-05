// 8.Sum of odds (1→20) — Compute the sum of odd numbers from 1 to 20.


let sum: number = 0;

for (let num = 1; num <= 20; num += 2) {
    sum += num;
}

console.log("The sum of odd numbers from 1 to 20 is:", sum);
