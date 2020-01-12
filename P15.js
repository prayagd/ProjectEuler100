function factorial(num){
  return num === 1 ? 1 : num * factorial(num - 1)
}

function latticePaths(gridSize) {
  let blocksTravel = gridSize * 2, i = 0, temp = 1;
  while(i < gridSize){
    temp *= blocksTravel
    blocksTravel--;
    i++
  }
  return parseInt(temp/factorial(gridSize))
  
  // Good luck!
}

latticePaths(20)