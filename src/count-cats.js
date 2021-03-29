const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res=0;
  for(let subArr of matrix){
    for(let elem of subArr){
    if(String(elem)==='^^') res++;
    }
  }
  if(res===0) return 0;
  else return res;
};
