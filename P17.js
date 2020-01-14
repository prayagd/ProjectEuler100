function numberLetterCounts(limit) {
  let numbers = {
    0: '',
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: 'fourteen',
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty"
  }

  let tens = {
    0: '',
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eigthy",
    9: "ninety"
  }

  let hundreds = {
    1: "hundred" 
  }

  let thousand = {
    1 : "thousand"
  }

  let total = 0, tempStr = "", words = ""

  for(let i = 1; i <= limit; i++){


    if(i.toString().length == 1 || i <= 20){
        console.log(numbers[i])
        total += numbers[i].length
    }


    else if(i <= 99 && i.toString().length == 2){
      tempStr = i.toString();
      words = tempStr[1] == 0 ? tens[tempStr[0]] : tens[tempStr[0]] + numbers[tempStr[1]]
      console.log(words)
      total += words.length
    }


    else if(i.toString().length == 3){
      tempStr = i.toString();


      if(Number(tempStr.slice(1,)) == 0){
         words = numbers[tempStr[0]] + hundreds[1]
         console.log(words)
         total += words.length
      }

      else if(Number(tempStr.slice(1,)) <= 9){
        words = numbers[tempStr[0]] + hundreds[1] + "and" + numbers[tempStr.slice(2,)]
        console.log(words)
        total += words.length
      }


      else if(Number(tempStr.slice(1,)) > 9 && Number(tempStr.slice(1,)) <= 20){
        words = numbers[tempStr[0]] + hundreds[1] + "and" + numbers[tempStr.slice(1,)]
        console.log(words)
        total += words.length
      }


      else{
        words = numbers[tempStr[0]] + hundreds[1] + "and" + tens[tempStr[1]] + numbers[tempStr[2]]
        console.log(words)
        total += words.length
      }
      

    }

    else{
      tempStr = i.toString();
      words = numbers[tempStr[0]] + thousand[1]
      total += words.length
    }
    
  }
  
  return total
  // Good luck!
}

console.log(numberLetterCounts(5));
