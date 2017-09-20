// Mean Median Mode

/*RULES:
  Function takes number array as parameter and it will return an object that has three properties:
    Mean - The Average of all numbers
    Median - The middle number
    Mode - The number most seen

  This algorithm should have 4 separate functions:
    getMean(arr)
    getMedian(arr)
    getMode(arr)
    meanMedianMode(arr)
      This last one calls all of the other functions
      Returns an object that has the mean, median, and mode
*/

/*PSEUDOCODE

  This seems pretty straightforward, but here's the plan:
  1) Make each individual function first
    1a) Mean: Sum all elements, divide by length of array
    1b) Median: Sort all elements numerically, pick the one in the middle
    1c) Mode: Create an object with all numbers in array. Tally up frequency, return number seen the most.
  2) meanMedianMode
    2a) Call all the functions and put them in an object.
    2b) Return object
*/

