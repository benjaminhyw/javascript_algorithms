//Two Sum

/*RULES:
  Function takes two arguments
    An array of numbers
    A 'sum' number that we want

  The function should return an array of pairs from inside the number array, that add up to the sum provided
  
  It's okay for numbers to be used multiple times

  Different ways to solve:
    Nested Loops O(n^2)
    Hash Table O(n)

  Try to solve for both!
*/

/*PSEUDOCODE (NESTED LOOPS SOLUTION):
  
  1)Loop through provided array
      For each number, add number to each of the other ones individually
        If that == provided sum
          Make a pair, push to new array you will be returning
        else,
          Move on to next pair to try and add
      Return final array
*/
