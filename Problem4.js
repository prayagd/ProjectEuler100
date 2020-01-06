function largestPalindromeProduct(n) {
    let num = Math.pow(10, n -1), arr = [];
    while(num < Math.pow(10, n)){
      let paliDrome = 0, count = 0;
        while(count < Math.pow(10, n)){
            paliDrome += num;
            if(paliDrome.toString() === paliDrome.toString().split('').reverse().join('')){
                if(!arr.includes(paliDrome)){
                    arr.push(paliDrome)
                }
            }
            count++
        }
    num++;
    }
    // Good luck!
    return Math.max(...arr);
  }
  
  console.log(largestPalindromeProduct(2));