import { plus, minus } from "./count";

test("add one to the number", () => {
  expect(plus(0)).toBe(1);
});

test("subtract one from the number", () => {
  expect(minus(0)).toBe(-1);
});
