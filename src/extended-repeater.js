function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  let result = "";
  let additionStr = "";

  for (let i = 1; i <= additionRepeatTimes; i++) {
    if (i === additionRepeatTimes) {
      additionStr += addition;
    } else {
      additionStr += addition + additionSeparator;
    }
  }

  for (let i = 1; i <= repeatTimes; i++) {
    if (i === repeatTimes) {
      result += str + additionStr;
    } else {
      result += str + additionStr + separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
