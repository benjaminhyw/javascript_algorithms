// Is Palindrome Challenge

/*Rules:
  Take any string as an argument
    Return true if palindrome
    return false if not
*/

/*PSEUDOCODE
  1) Split string up to individual characters, strip away punctuation
  2) Create new array with reversed array from original
  3) Compare the two, and return true or false
*/

// NOTE:
// In the code below, we remove punctuation marks by comparing each character to the ones inside the validCharacters array.  indexOf returns an index value of -1 IF the character provided doesn't exist inside the array it's checking.  Therefore, the code only pushes valid characters with an index higher than -1.

function isPalindrome(str){
  str = str.toLowerCase();
  var originalArr = str.split("");
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz';

  var lettersArr = [];
  originalArr.forEach(function(char){
    if (validCharacters.indexOf(char) > -1){
      lettersArr.push(char)
    }
  })

  return (lettersArr.join() == lettersArr.reverse().join());
}