function deleteDigit(num) {
  const numStr = num.toString();
  let max = 0;
  for (let i = 0; i < numStr.length; i++) {
    const newNumStr = numStr.slice(0, i) + numStr.slice(i + 1);
    const newNum = parseInt(newNumStr);
    if (newNum > max) {
      max = newNum;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
