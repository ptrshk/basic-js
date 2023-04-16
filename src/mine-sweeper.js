function markNeighbors(matrix, row, col) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Iterate over each neighbor of the cell
  for (let i = Math.max(0, row - 1); i <= Math.min(numRows - 1, row + 1); i++) {
    for (let j = Math.max(0, col - 1); j <= Math.min(numCols - 1, col + 1); j++) {
      // If the neighbor is not the current cell, increment its count
      if (i !== row || j !== col) {
        matrix[i][j]++;
      }
    }
  }
}
function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  
  // Create an empty result matrix
  const result = Array(numRows).fill().map(() => Array(numCols).fill(0));

  // Iterate over each cell in the matrix
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      // If the current cell is a mine, mark its neighbors
      if (matrix[i][j]) {
        markNeighbors(result, i, j);
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
