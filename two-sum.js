//Two Sum

/*RULES:
  Function takes two arguments
    An array of numbers
    A 'sum' number that we want

  The function should return an array of pairs from inside the number array, that add up to the sum provided
  
  It's okay for numbers to be used multiple times

  Different ways to solve:
    Nested Loops O(n^2)
    Hash Table O(n)

  Try to solve for both!
*/

/*PSEUDOCODE (NESTED LOOPS SOLUTION):
  
  1)Loop through provided array
      For each number, add number to each of the other ones individually
        If that == provided sum
          Make a pair, push to new array you will be returning
        else,
          Move on to next pair to try and add
      Return final array
*/

function twoSum(numArr, sum){
  var sumArr = []
  numArr.forEach(function(number){
    for(var i = 0; i < numArr.length; i ++){
      if (number == numArr[i]){
        i++;
      }
      if ((number + numArr[i]) == sum){
        sumArr.push([number, numArr[i]])
      }
    }
  })
  return sumArr;
}

/*PSEUDOCODE (HASH TABLE)
  1)Create object (or array in this case, you just need to see if this number exists even just once)
  2)Make each number in numArr a key, and make the value the number of times they come up
  3)Loop through the numbers, and subtract from sum
      Whatever the remainder is, check the object to see if that number is included.
      If it is, pair those up and push to array
      Else, move on to the next number in the iteration
*/

function twoSum(numArr, sum){
  var sumArr = [];

  numArr.forEach(function(number){
    var diff = sum - number;
    if (numArr.includes(diff)){
      sumArr.push([number, diff])
    }
  })
  return sumArr;
}
