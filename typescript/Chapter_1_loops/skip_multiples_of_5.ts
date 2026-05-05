// 11.Skip multiples of 5 (1→30) — Print numbers 1 to 30 but skip multiples of 5 using while + continue.

let numbb: number = 1;

while (numbb <= 30) {
    if (numbb % 5 === 0) {
        num++;
        continue;
    }
    console.log(numbb);
    num++;
}
