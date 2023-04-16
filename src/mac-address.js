const { NotImplementedError } = require('../extensions/index.js');
function isMAC48Address(inputString) {
  // Define the regular expression for MAC-48 address
  const macRegex = /^([0-9A-Fa-f]{2}[-]){5}([0-9A-Fa-f]{2})$/;

  // Check if the input string matches the regular expression
  return macRegex.test(inputString);
}

module.exports = {
  isMAC48Address
};
