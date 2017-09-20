// Reverse Array In Place

/*RULES:
  Take array as parameter
    Reverse array
    Return reversed array

  NOTES:
  Can't create new empty array to push in
  Must modify given array
  Can't use array.reverse();
*/

/*PSEUDOCODE

  1) Find array length
  2) Create variable "stopper" for last element in array
  2) (array.length - 1) times do:
    2a) Push element previous to "stopper" to the end of the array
    2b) Splice that same element out from in front of 'stopper'
  3) When done, return reversed array
*/

// This is the solution I came up with and it works!  But, will add the course solution underneath.  Considerably faster, since it only loops through half of the array rather than the whole array like mine does.

// function reverseArray(arr){
//   var count = arr.length;
//   var stopper = arr[count - 1];

//   for (var i = 0; i < count; i++){
//     arr.push(arr[arr.indexOf(stopper) - 1]);
//     arr.splice((arr.indexOf(stopper) - 1), 1);
//   }

//   return arr;
// }

function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }

  return arr;
}