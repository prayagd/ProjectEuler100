function specialPythagoreanTriplet(n) {
    let a = 0, b = 0, c = 0;
    for(let l = 2; l < n; l++){
        for(let m = 1; m < l; m++){
          a = (Math.pow(l, 2) - Math.pow(m, 2));
          b = (2 * l * m);
          c = (Math.pow(l, 2) + Math.pow(m, 2));
          if(a + b + c === n){
            return a * b * c;
         }
        }
     }
     // Good luck! //Thank you
    }
    
    specialPythagoreanTriplet(24);
    