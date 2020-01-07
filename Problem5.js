function smallestMult(n) {
    let tempArr = Array.from({length: n}, (i, e) => e + 1)
    return tempArr.reduce((lcm, num) =>lcm = lcm * num / gcd(lcm, num))
    
    function gcd(a, b){
      return !b ? a : gcd(b, a % b);
    }
      // Good luck!
    }
    
    smallestMult(20);
    