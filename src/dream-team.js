const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let newArr = [];
  for(let substr in members){
    if(typeof(members[substr])==='string') {
        newArr.push(members[substr].trim().charAt(0).toUpperCase());
    }
  }

  return newArr.sort().join('');
};
