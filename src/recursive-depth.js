class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1; // minimum depth is always 1
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const depth = this.calculateDepth(arr[i]) + 1;
        if (depth > maxDepth) {
          maxDepth = depth;
        }
      }
    }
    return maxDepth;
  }
}


module.exports = {
  DepthCalculator
};
