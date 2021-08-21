let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

matrix = [
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
];

function matrixElementsSum(matrix) {
  let totalRent = 0;
  const hauntedRoomsIndex = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        hauntedRoomsIndex.push(j);
      } else if (hauntedRoomsIndex.indexOf(j) === -1) {
        totalRent += matrix[i][j];
      }
    }
  }
  return totalRent;
}

console.log(matrixElementsSum(matrix));
