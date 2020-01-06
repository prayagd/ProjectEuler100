function largestPrimeFactor(number) {
    let product = 1, primeFac = [];
    for(let i = 2; i <= number; i++){
      if(number % i === 0){
         primeFac.push(i);
          product *= i;
          if(product == number){
            break;
          }
      }
    }
    // Good luck! //Thank You
    return Math.max(...primeFac);
  }
  
  largestPrimeFactor(13195);