// Given an Array containing integers, floats, and one character strings, write a
// function that takes an Array as a parameter and returns an Object with keys
// evens, odds, and chars. The value for evens is an array of sorted even numbers,
// the value for odds is a list of sorted odd numbers and chars is a list of sorted
// single-character strings.


let myArray =[3.0 , 'a' , 7 , 'x' , '20' , 'd', 4 ,'f', 8 ]


function objectSeparate(myArray){
    let evens=[ ]
let odds=[ ]
let chars=[ ]
    myArray.forEach(element => {
        if(typeof element === "string")
        {
            chars.push(element)
        }
        
        if(element %2 === 0 && typeof element != "string")
        {
            evens.push(element)
        }
        
        if( element%2 != 0 && typeof element != "string")
        {
            odds.push(element)
        }
    });
console.log("chars: [" + chars + "]" )
console.log("evens: [" + evens + "]")
console.log("odds: [" + odds + "]")
  
}

objectSeparate(myArray)