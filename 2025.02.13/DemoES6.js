let studentAs = ["A", "B", "C", "D"];
let stdB = [...studentAs, "E"];

console.log(stdB);

export const hamNgauNhien = (a, b, c) => {
  return a + b + c;
};

const hamX = (a, b, c) => a + (b * b) / c;

console.log(hamNgauNhien(1, 2, 3));
console.log(hamX(1, 2, 3));
