let matrix1 = [
  [5, 7, 5],
  [9, 3, 3],
  [6, 4, 3],
];

let matrix2 = [
  [1, 4, 5],
  [9, 0, 3],
  [6, 9, 2],
];
for (let k = 0; k < 3; k++) {
  for (let a = 0; a < 3; a++) {
    console.log(matrix1[k][a] + matrix2[k][a]);
  }
}
