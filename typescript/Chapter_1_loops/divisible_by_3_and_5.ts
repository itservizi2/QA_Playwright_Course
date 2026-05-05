// 10.Divisible by 3 and 5 (1→100) — Print numbers divisible by both 3 and 5 from 1 to 100.

for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }
}
