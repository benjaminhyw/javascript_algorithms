// FizzBuzz Challenge

/*
  Rules:
  Function must take an argument.
    If argument divisible by 3, console.log("Fizz")
    If argument divisible by 5, console.log("Buzz")
    If argument divisible by both 3 & 5, console.log("FizzBuzz")
*/

function fizzBuzz(num){
  for (var i =1; i <= num; i++){
    if (i % 15 === 0){
      console.log("FizzBuzz")
    } else if (i % 3 === 0){
      console.log("Fizz")
    } else if (i % 5 === 0){
      console.log("Buzz")
    } else {
      console.log(i);
    } 
  }
}