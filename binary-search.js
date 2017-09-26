//Binary Search Challenge

/*RULES:
  Function takes in number array and key
  Go to the middle of the number array and see how close to the key it is
  If the key is higher than the middle, delete the first half of original array and repeat process
    Middle point, compare, high or low, delete the opposite side
    Do this until middle point and number are equivalent

  Didn't specify WHAT it should return, so I'm gonna say..

  Return true if found, false if not
  Make the return statement a sentence, that includes the number of times it iterated through.
*/

/*PSEUDOCODE
  1) Find original array.length()
  2) Compare middle point with key
    2a) If ==, return true (sentence form)
    2b) Else, figure out if key is greater than or equal.
      2b.1) If key > mid, array = second half
      2b.2) Else key < mid, array = first half
    2c) Repeat process, and up a counter variable one
  3) Return true statement
*/

function binarySearch(numArr, key, count){
  var newNumArr = numArr.sort(function(a, b){return a-b});
  var size = newNumArr.length
  var middleIndex = 0;
  var iterationCount = count || 1;

  if ((size%2) === 0){
    middleIndex = (size/2);
  } else {
    middleIndex = ((size/2) - .5);
  }

  if ((newNumArr[middleIndex] != key) && (size == 1)){
    return false
  } else if (newNumArr[middleIndex] == key){
    return 'True!  It took ' + iterationCount + ' times';
  } else {
    if (key > newNumArr[middleIndex]){
      // console.log("key: " + key + " | mid: " + newNumArr[middleIndex] )
      // console.log("iterationCount: " + iterationCount)
      // console.log(size)
      // console.log(middleIndex)
      console.log("Greater than")
      console.log(newNumArr)

      // Delete the first half
      newNumArr = newNumArr.splice(middleIndex, (size - middleIndex));

      // Call recursive function
      return binarySearch(newNumArr, key, (iterationCount + 1));

    } else {
      // console.log("key: " + key + " | mid: " + newNumArr[middleIndex] )
      // console.log("iterationCount: " + iterationCount)
      // console.log(size)
      // console.log(middleIndex)
      console.log("Lower than")
      console.log(newNumArr)

      // Delete the second half
      newNumArr = newNumArr.splice(0, (size - middleIndex));

      // Call recursive function
      return binarySearch(newNumArr, key, (iterationCount + 1));

    }
  }
}