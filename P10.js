function isPrime(num) {
    for(var i = 2; i <= Math.sqrt(num); i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  
  function primeSummation(n) {
    let sum = 0;
    let tempArr = [...Array(n).keys()]
    tempArr.splice(0, 2);
    for(let i = 2; i <= Math.sqrt(n) ; i++){
      if(isPrime(i)){
        tempArr = tempArr.filter(val => val == i ? val :val % i != 0)
      }
    }
  
    return tempArr.reduce((total, val) => total + val)
  }
  primeSummation(17);
  