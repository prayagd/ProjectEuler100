function fiboEvenSum(n) {
    let fib = [], i = 2;
    fib[0]  = 1;
    fib[1] = 2;
    while(i <= n - 1){
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    }
    return fib.reduce((sum, val) => {return sum += val % 2 == 0 ? val : 0}, 0)
  
    // You can do it! //Yes, I can do it
  }
  
  console.log(fiboEvenSum(23));