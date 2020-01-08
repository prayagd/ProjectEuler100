function isPrime(num) {
  for(var i = 2; i <= Math.sqrt(num); i++)
    if(num % i === 0) return false;
  return num > 1;
  // Good luck!
}
let prime = 0
function nthPrime(n) {
  let count = 0;
  for(let i = 2; count != n; i++){
    if(isPrime(i)){
        count++;
        prime = i;
    }
  }
  return prime;
}

nthPrime(10);