function countingSundays(firstYear, lastYear) {
    // Good luck!
    let sundays = 0
    for(let i = firstYear; i <= lastYear; i++){
      for(let j = 1; j <= 12; j++){
          let date = new Date(`${i} ${j} 1`)
          if(date.getDay() == 0){
            sundays++
          }
      }
       
    }
   return sundays
  }
  countingSundays(1943, 1946);