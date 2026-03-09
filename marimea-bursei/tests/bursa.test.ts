import { describe, expect, test } from "@jest/globals";
import { calculeazaBursa } from "../src/bursa";

describe("calculeazaBursa", () => {
  test("Primul curs are mereu bursa 0", () => {
    expect(calculeazaBursa(1, "voluntar")).toBe(0);
  });

  test("Al doilea curs cu note satisfăcătoare", () => {
    expect(calculeazaBursa(2, "satisfacatoare")).toBe(500);
  });

  test("Al treilea curs cu voluntariat", () => {
    expect(calculeazaBursa(3, "voluntar")).toBe(1000);
  });

  test("Al patrulea curs cu sport", () => {
    expect(calculeazaBursa(4, "sport")).toBe(800);
  });
});
