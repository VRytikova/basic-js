const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {
    turns: Math.pow(2,disksNumber) - 1,
    seconds: Math.floor((Math.pow(2,disksNumber) - 1) * 3600 / turnsSpeed),
  };

  return obj;
};
