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

function reverseArray(arr){
  var count = arr.length;
  var stopper = arr[count - 1];

  for (var i = 0; i < count; i++){
    arr.push(arr[arr.indexOf(stopper) - 1]);
    arr.splice((arr.indexOf(stopper) - 1), 1);
  }

  return arr;
}