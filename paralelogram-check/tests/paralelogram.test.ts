import { isParallelogramSides, sideLengthsSchema } from "../src/paralelogram";
import { ZodError } from "zod";

function validateAndCheckParallelogram(lengths: unknown): boolean {
  const parsedLengths = sideLengthsSchema.parse(lengths);
  return isParallelogramSides(parsedLengths);
}

describe("Parallelogram side checker", () => {
  test("Valid parallelogram sides (10,5,10,5)", () => {
    expect(validateAndCheckParallelogram([10, 5, 10, 5])).toBe(true);
  });

  test("Not a parallelogram (10,5,9,5)", () => {
    expect(validateAndCheckParallelogram([10, 5, 9, 5])).toBe(false);
  });

  test("Throws error for non-numeric input", () => {
    expect(() => validateAndCheckParallelogram([10, "a", 10, 5])).toThrow(ZodError);
  });

  test("Throws error for invalid side length", () => {
    expect(() => validateAndCheckParallelogram([10, 0, 10, 5])).toThrow(ZodError);
  });

  test("Throws error if not 4 sides", () => {
    expect(() => validateAndCheckParallelogram([10, 5, 10])).toThrow(ZodError);
  });
});