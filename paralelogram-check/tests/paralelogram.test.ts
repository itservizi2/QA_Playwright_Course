import { isParallelogramSides } from "../src/paralelogram";

describe("Parallelogram side checker", () => {
  test("Valid parallelogram sides (10,5,10,5)", () => {
    expect(isParallelogramSides([10, 5, 10, 5])).toBe(true);
  });

  test("Not a parallelogram (10,5,9,5)", () => {
    expect(isParallelogramSides([10, 5, 9, 5])).toBe(false);
  });

  test("Throws error for non-numeric input", () => {
    expect(() => isParallelogramSides([10, "a" as any, 10, 5])).toThrow();
  });

  test("Throws error for invalid side length", () => {
    expect(() => isParallelogramSides([10, 0, 10, 5])).toThrow();
  });

  test("Throws error if not 4 sides", () => {
    expect(() => isParallelogramSides([10, 5, 10])).toThrow();
  });
});