function longestCollatzSequence(limit) {
    let count = 0, foundNum = 0;
    for(let i = 1; i <= limit; i++){
      let temp = i, tempCount = 1;
      while(temp != 1){
        temp % 2 == 0 ? temp = temp/2 : temp = 3 * temp + 1;
        tempCount++
      }
      if(count < tempCount){
        count = tempCount;
        foundNum = i;
      }
    }
      
    return foundNum
      // Good luck!
    }
    
    longestCollatzSequence(14);
    