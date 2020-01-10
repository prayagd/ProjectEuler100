function factors(num){
    for(let j = 1; j <= Math.sqrt(num); j++){
        if(num % j === 0){
          tempArr.push(j)
          if(!tempArr.includes(num/j)){
            tempArr.push(num/j)
          }
        }
      }
      return tempArr
  }
  let tempArr = []
  function divisibleTriangleNumber(n) {
  let num = 0;
    for(let i = 1; tempArr.length < n;i++){
      tempArr = []
      num = (i * (i + 1)) / 2
      factors(num)
    }
    return num
    // Good luck!
  }
  
  console.log(divisibleTriangleNumber(167));