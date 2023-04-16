var getCommonCharacterCount = (s1, s2) => {
  const result = [];
  const reference = [...s1];
  let str = s2;

  for (const letter of reference) {
    if (str.includes(letter)) {
      result.push(letter);
      str = str.replace(letter, '');
    }
  }

  return result.length;
};

module.exports = {
  getCommonCharacterCount
};
