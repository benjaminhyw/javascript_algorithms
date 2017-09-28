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

function sieveOfEratosthenes(num){
  var squareRoot = Math.sqrt(num);
  var arr = [...Array(num + 1)].map((x, i) => i)


}