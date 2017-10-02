// Max Stock Profit

/*RULES:
  Takes in array of prices as parameters
  Returns max possible profit of the day
  If there is no possible profit, return -1
  Else, return profit
*/

/*PSEUDOCODE
  1) Create variables lowPoint and maxPoint, make the very first element both lowPoint and maxPoint just to start.
  2) Loop through array
    2a) For each element, compare each variable.
    2b) If element[i] < lowPoint, lowPoint = element[i]
    2c) If element[i] > maxPoint, maxPoint = element[i]
  3) maxPoint - lowPoint
    3a) If 0 || positive number,  return profit
    3b) Else, return -1
*/