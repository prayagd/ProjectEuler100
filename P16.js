function powerDigitSum(exponent) {
    // Good luck!
  let arr = [1]
  let num = 0;
   for(let i = 1; i <= exponent; i++){
     let carry = 0;
     let count = arr.length + 1;
     for(let j = 0; j < count; j++){
       num = arr[j] ? arr[j] : 0
       num = 2 * num + carry
       if(num > 9){
         num -= 10;
         carry = 1
       }
       else{
         carry = 0
       }
       arr[j] = num
     }
   }
  return arr.reduce((total, val) => total + val)
  }
  
  powerDigitSum(5);