function multiplesOf3and5(number) {
    let i = 0, sum = 0;
    while(i < number){
      if(i % 3 == 0){
        sum += i;
      }
      else if(i % 5 == 0){
        sum += i;
      }
    i++;
    }
    // Good luck!
    return sum;
  }
  
  multiplesOf3and5(1000);