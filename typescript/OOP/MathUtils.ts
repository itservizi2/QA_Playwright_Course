// Creati fisierul MathUtils.ts care exporta: constanta PI = 3.14, functia square(x: number): number si clasa Calculator cu
// metoda statica add(a: number, b: number): number.
// Intr-un fisier App.ts faceti named import pentru toate trei si folositi-le.

export const PI = 3.14;

export function square(x: number): number {
    return x * x;
}

export class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }
}
