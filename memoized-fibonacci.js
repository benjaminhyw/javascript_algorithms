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

function fibMemo(index, cache) {
  cache = cache || [];
  if (cache[index]) return cache[index];
  else {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}