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