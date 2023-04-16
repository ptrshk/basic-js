function getSeason(date) {
  if (date == null) return "Unable to determine the time of year!";
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw Error("Invalid date!");
  }

  let month = date.getMonth();
  if (month < 2 || month == 11) return "winter";
  if (month >= 2 && month < 5) return "spring";
  if (month >= 5 && month < 8) return "summer";
  if (month >= 8 && month < 11) return "autumn";
}

module.exports = { getSeason };

