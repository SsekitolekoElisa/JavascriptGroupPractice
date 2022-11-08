// Write a function named fizzBuzz that takes in two(2) parameters which are
// expected to be strings. The function should return the string Fizz if the
// combined length of the parameters is divisible by 3, the string Buzz if it is
// divisible by 5, and the string FizzBuzz if it is divisible by both 5 and 3.


function  fizzBuzz(x , y){

    let result1=x.length + y.length 

    if (result1 % 3 == 0)
    {
  console.log("fizz")
    }
    else if(result1 % 5 == 0)
    {
        console.log("Buzz")
    }
    else if(result1 % 3 == 0 && result1 % 5 == 0)
    {
        console.log("FizzBuzz")
    }
    else{
        console.log("Not divisble by 3 and 5");
    }
}

fizzBuzz('elisa' ,'ssekitoleko')