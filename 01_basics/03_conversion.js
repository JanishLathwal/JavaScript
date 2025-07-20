let score = "33"
console.log(typeof score)

// to convert string to number or integer
let valueinNumber = Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber)


let score1="33ab"
console.log(typeof score1)
let valueinNumber1= Number(score1)
console.log(typeof valueinNumber1);
console.log(valueinNumber1)
// it will return Nan i.e. Not a Number ! bcoz of ab with 33


let score2= true;
// for boolean data type
console.log(typeof score2)
let valueinNumber2= Number(score2)
console.log(typeof valueinNumber2);
console.log(valueinNumber2)
// return 1 for true and 0 for false


let score3= null ;
// for null data type
console.log(typeof score3)
let valueinNumber3= Number(score3)
console.log(typeof valueinNumber3);
console.log(valueinNumber3)
// return 0 for null!


let score4= undefined ;
// for undefined data type
console.log(typeof score4)
let valueinNumber4= Number(score4)
console.log(typeof valueinNumber4);
console.log(valueinNumber4)
// return NaN for undefined!

// "33" -> 33
// "33abc" -> NaN
// true -> 1 , false -> 0
// null -> 0
// undefined -> NaN

let flag = "Jaat"

let booleanFlag= Boolean(flag)
console.log(booleanFlag);
// it will give true for any value other than empty string: "" and 0

let number=33
let stringvalue = String(number);
console.log(typeof stringvalue);
console.log(stringvalue);
// this 33 not got converted to string "33"










