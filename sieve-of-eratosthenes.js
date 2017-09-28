// Sieve of Eratosthenes

/*RULES:
  Function takes one parameter
  Return an array of all prime numbers from 0-parameter
*/

/*PSEUDOCODE:
  1) Find square root of parameter
  2) Create an array of numbers from 0-parameter
  3) Loop through numbers, but stop until square root (if a float, stop after number rounded up?)
  4) Return array
*/

function sieveOfEratosthenes(n){
  var squareRoot = Math.sqrt(n);
  var primes = [];

  for (var i = 0; i <= n; i++){
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (var i = 2; i <= squareRoot; i++){
    for (var j = 2; j * i <= n; j++){
      primes[i * j] = false;
    }
  }

  var result = []
  for (var i = 0; i < primes.length; i++){
    if (primes[i]){
      result.push(i)
    }
  }

  return result;

}