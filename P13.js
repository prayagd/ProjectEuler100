function largeSum(arr) {
  // Good luck!
  let num = arr.map(Number).reduce((total, val) => total + val).toString(10)
  if(num.includes(".")){
    num = num.replace(".", "")
  }
  return Number(num.slice(0, 10))
}

// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
