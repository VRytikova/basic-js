const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members || members.constructor!==Array) return false;
  let newArr = '';
  for(let substr in members){
    if(typeof(substr)==='string')
      substr = substr.trim();
    newArr =''+ substr[0];
  }
  newArr = newArr.toUpperCase().split('').sort().join('');
  return newArr;
};
