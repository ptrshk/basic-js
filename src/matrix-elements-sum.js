function getMatrixElementsSum(matrix) {
  const zeroIndices = new Set();
  let sum = 0;

  // Iterate through each row and column of the matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // If the current element is zero, mark its index as zero
      if (matrix[i][j] === 0) {
        zeroIndices.add(j);
      }
      // If the current element is not zero and none of the elements
      // above it in the same column are zero, add it to the sum
      else if (!zeroIndices.has(j)) {
        sum += matrix[i][j];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
