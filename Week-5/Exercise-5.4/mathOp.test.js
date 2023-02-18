import { sum, diff, product } from "./mathOp";

//test for sum()
test("Adding two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

//test for diff()
test("Subtracting two numbers", () => {
  expect(diff(2, 1)).toBe(1);
});

//test for product()
test("Adding two numbers", () => {
  expect(product(5, 2)).toBe(10);
});
