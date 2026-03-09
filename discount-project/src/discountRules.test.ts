// discountRules.test.ts
import { calculateDiscount } from "./discountRules";

describe("calculateDiscount", () => {
  test("Pasager sub 1 an – orice perioadă", () => {
    expect(calculateDiscount(0.5, "Craciun")).toBe(100);
    expect(calculateDiscount(0.5, "Paste")).toBe(100);
    expect(calculateDiscount(0.5, "Vara")).toBe(100);
  });

  test("Pasager între 1 și 3 ani – orice perioadă", () => {
    expect(calculateDiscount(2, "Craciun")).toBe(50);
    expect(calculateDiscount(2, "Paste")).toBe(50);
    expect(calculateDiscount(2, "Vara")).toBe(50);
  });

  test("Pasager între 3 și 18 ani – orice perioadă", () => {
    expect(calculateDiscount(10, "Craciun")).toBe(30);
    expect(calculateDiscount(10, "Paste")).toBe(30);
    expect(calculateDiscount(10, "Vara")).toBe(30);
  });

  test("Pasager peste 18 ani – Crăciun", () => {
    expect(calculateDiscount(25, "Craciun")).toBe(50);
  });

  test("Pasager peste 18 ani – Paște", () => {
    expect(calculateDiscount(25, "Paste")).toBe(30);
  });

  test("Pasager peste 18 ani – Vacanțe de vară", () => {
    expect(calculateDiscount(25, "Vara")).toBe(0);
  });
});