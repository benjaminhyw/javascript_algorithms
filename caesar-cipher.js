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
  2) Turn string into array of individual letters
  3) Do math
    3a) If number is less <= 13, start at current array
        Otherwise start on second array
    3b) Find what index current letter is normally, and add or subtract from there
  4) Create new string made of new letters
    4a) If punctuation or empty space, leave as is
  5) Return new string
*/
