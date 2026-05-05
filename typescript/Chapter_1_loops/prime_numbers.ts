// 6.Prime numbers (1→50) — Print all prime numbers between 1 and 50 using nested for loops.

for (let num = 2; num <= 50; num++) {
    let isPrime: boolean = true;


    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
