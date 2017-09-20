// Caesar Cipher

/*Rules
  Function will take two parameters:
    A string and a numbers
  The objective of a Caesar Cipher algorithm is to shift every letter in ur given string by the number that is passed in
  If you shift a letter towards the end of the alphabet, it must loop around to the beginning of the alphabet
  It should be able to handle negative numbers to move backwards
*/

/*PSEUDOCODE
  
  1) Provide alphabet array
    1a) Maybe two arrays with half the alphabet each?
    1b) Or just one array, but use the modulus operator..
  2) Turn string into array of individual letters
  3) Do math
    3a) If number is less <= 13, start at current array
        Otherwise start on second array
    3b) Find what index current letter is normally, and add or subtract from there
  4) Create new string made of new letters
    4a) If punctuation or empty space, leave as is
  5) Return new string
*/

// NOTE: The negative number portion to this first answer isn't fully functional

// function caesarCipher(str, num){
//   str = str.toLowerCase();
//   var strArr = str.split("");
//   var newArr = [];
//   var alphabet = "abcdefghijklmnopqrstuvwxyz";
//   var alphabetArr = alphabet.split("");

//   var originalIndex = 0;

//   strArr.forEach(function(letter){
//     originalIndex = alphabetArr.indexOf(letter);
//     if (originalIndex == -1){
//       newArr.push(letter);
//     } else {
//       if (num > 0){
//         if ((originalIndex + num) > 25){
//           newArr.push(alphabetArr[(originalIndex + num) % 26]);
//         }
//         newArr.push(alphabetArr[originalIndex + num]);
//       } else if (num < 0){
//         if ((originalIndex + num) < 0){
//           newArr.push(alphabetArr[(26 + num)])
//         }
//         newArr.push(alphabetArr[originalIndex + num]);
//       }
//     };
//   });
//   return newArr.join("");
// }

function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };

  return newString;
}
caesarCipher('Zoo Keeper', 2);