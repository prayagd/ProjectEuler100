function sumSquareDifference(n) {
    let numArr = Array.from({length: n}, (a, b) => b + 1)
     let sumSquares = numArr.map(val => Math.pow(val, 2)).reduce((total, num) => total + num);
    
     let squareSum = numArr.reduce((total, num) => total + num);
    
     return Math.pow(squareSum, 2) - sumSquares;
      // Good luck!
      return true;
    }
    
    sumSquareDifference(100);
    