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

function isPalindrome(str){
  var originalArr = str.split("");
  var reverseArr = str.split("").reverse();

  return originalArr.join() == reverseArr.join()
}