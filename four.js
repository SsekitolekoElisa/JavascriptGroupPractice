/* 4. Write a function named firstPalindrome which takes a parameter: words. Given
an array of strings words, return the first palindromic string in the array. If there
is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.*/

//program to check if the string in an array is a palindrome

var wordArray = ["word", "madam", "oho", "cakes"];

function firstPalindrome(words) {
  //loop through
  for (let i = 0; i < words.length; i++) {
    //converting each string to an arry
    const arrayString = words[i].split('')

    //reverse the array value
    const reverseArrayValues = arrayString.reverse();

    //convert array back to string
    const reverseString = reverseArrayValues.join("");

    if (words[i] == reverseString){
        
        console.log(words[i]);
        break
      
    }else {
      console.log(" ");
    }
  }
}

firstPalindrome(wordArray);



// /**2. Write a JavaScript program that prompts a user to enter their year of birth and
// in turn prints a string in the console stating whether the user is a minor, a youth,
// or an elder. Anyone below 18 years is a minor, anyone between 18 and 36
// years is a youth and the rest are elders */
