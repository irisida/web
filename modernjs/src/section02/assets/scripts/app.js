

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => {
  if (x != 0 && y != 0) {
    return x / y;
  }
  return 0;
};

alert(add(5, 5));

const initialValue = 0;
let result = 0;

result = ((initialValue + 10) * 3) / 2 - 1;

operation = `${initialValue} + 10 * 3 / 2 -1`;

outputResult(result, operation);
