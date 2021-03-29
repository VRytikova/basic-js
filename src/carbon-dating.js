const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity)!=='string' || !isFinite(sampleActivity)) return false;
  else{
    let res = 0;
    sampleActivity = Number(sampleActivity);
    if(sampleActivity<=0 || sampleActivity>=9000) return false;
    res = Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity)) / (0.693/HALF_LIFE_PERIOD));
    if(res<0) return false;
    return res;
  }
};
