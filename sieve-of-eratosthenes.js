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

  //Turn all elements to true by default
  for (var i = 0; i <= n; i++){
    primes[i] = true;
  }

  //These are never prime so mark those false
  primes[0] = false;
  primes[1] = false;

  //Nested loop.  For each number, starting from index 2,
  for (var i = 2; i <= squareRoot; i++){
    // check and see if the multiples are found within the original array (make sure they don't exceed the max).  If they are, mark them false;
    for (var j = 2; j * i <= n; j++){
      primes[i * j] = false;
    }
  }

  //Create new array
  var result = []
  //Check all values from original array.  If they are true, push their index to the new array
  for (var i = 0; i < primes.length; i++){
    if (primes[i]){
      result.push(i)
    }
  }

  //Return new array
  return result;
}