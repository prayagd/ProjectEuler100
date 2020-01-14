function maximumPathSumI(triangle) {
    let newArr = triangle.slice()
    let tempArr = []
    for(let i = triangle.length - 1; i > 0 ; i--){
      let nextArr = newArr[i - 1]
      let currentArr = newArr[i]
      tempArr = [];
      for(let j = 0; j < i; j++){
        tempArr.push(Math.max((currentArr[j] + nextArr[j]), (currentArr[j+1] + nextArr[j])))
      }
      newArr[i - 1] = tempArr;
      newArr.pop()
  
    // Good luck!
  }
  return tempArr[0]
  
  }
  
  const testTriangle = [[3, 0, 0, 0],
                        [7, 4, 0, 0],
                        [2, 4, 6, 0],
                        [8, 5, 9, 3]];
  
  maximumPathSumI(testTriangle);