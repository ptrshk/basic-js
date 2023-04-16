const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Filter out the `-1` values and sort the remaining array
  const sortedHeights = arr.filter(h => h !== -1).sort((a, b) => a - b);
  
  // Map over the original array, replacing non-`-1` values with the next sorted value
  return arr.map(h => h !== -1 ? sortedHeights.shift() : -1);
}


module.exports = {
  sortByHeight
};
