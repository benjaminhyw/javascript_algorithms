// Reverse Words

/*RULES:
  Function takes a string parameter
    Reverse every word in the string
    Return new string

  NOTE:
    Order of words shouldn't change
    Can't use the array.reverse() method
*/

/*PSEUDOCODE

  1) Split array by words
  2) For each word,
    2a) Push last letter of each individual element into a new array
    2b) When done, push new array into new empty str array
    2c) Continue doing this for all words
  3) Join new array
  4) Return new string
*/

// This was my initial response, and it works fine!  But could be slightly refactored for cleaner code.

// function reverseWords(str){
//   var strArr = str.split(" ");
//   var emptyWordArr = [];
//   var emptyStrArr = [];
//   var index = 0;

//   strArr.forEach(function(word){
//     word = word.split('');
//     index = (word.length);
//     while (index > -1){
//       emptyWordArr.push(word[index])
//       index--;
//     }
//     emptyStrArr.push(emptyWordArr.join(''));
//     emptyWordArr = [];
//   });
//   return emptyStrArr.join(' ');
// }


