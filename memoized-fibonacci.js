// Memoized Fibonacci

/*RULES:
  Two params
    Index
      Index of number in fibonacci sequenec
    Cache
      An array used as memory
*/

/*PSEUDOCODE
  Memoization:
    Check to see if number already exists in cache
    If number is in cache, use that number
    If number is not in cache, calculate it and put it in cache so it can be used multiple times in future
    O(n) runtime complexity
*/