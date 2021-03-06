//Bubble Sort

/*RULES
  Takes one parameter
    An array
  Sort it using bubble sort
  Return sorted array
*/

/*PSEUDOCODE
  1) Get the array.length, because you'll need this number later
  2) For loop
    2a) For each number, check the number directly to the right of it.
    2b) If num < numRight, move to the next num
    2c) Else if num > numRight, swap positions of each other.
    2d) Reach the end, then repeat the process.  Do it but this time, array.length - 1 (minus 1 more each loop) times
  3) Return bubble sorted array
*/

function bubbleSort(arr){
  var length = arr.length;

  for (var i = length; i > 0; i--){

    for (var j = 0; j < i; j++){
      var tempHolder = 0;
      if (arr[j] > arr[j + 1]){
        tempholder = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempholder;
      }
    }

  }
return arr
}