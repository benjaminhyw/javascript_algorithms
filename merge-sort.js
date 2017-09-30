// Merge Sort

/*RULES:
  Two function algorithm
  function mergeSort(arr){
    // take in a single, unsorted array as a parameter
    // split the array into two halves
  }

  function merge (array1, array2){
    // takes in two sorted arrays as parameters
    // merges those sorted arrays into one sorted array
    // returns one sorted array
  }
*/

/*PSEUDOCODE
  1) Check array length
  2) If array.length > 1
    2a) split up array using mergeSort function
  3) Start merging arrays, but only into arrays of two elements at first
  4) Continue doing this until you're left with two main arrays
  5) Final merge 
  6) Return final array
*/

function mergeSort(arr){
  // Split up an array into two arrays
  // You're gonna have to call this recursively until each array.length  == 1;

  //Base Case
  if (arr.length < 2){
    return arr;
  }

  // Main functionality
  var length = arr.length;
  var midPoint = Math.floor(arr.length/2);
  var firstHalf = arr.splice(0, midPoint);
  var secondHalf = arr.splice(midpoint, length);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2){
  // Compare the first value of each array with each other.
  // Do this for every

}