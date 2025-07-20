// all operations like +,-,*,**,/,% all have same use as that in c++

// string concatination !
let str1="Janish ";
let str2="Jaat ";
let str3=str1+ str2;
console.log(str3);

let joined=1+"2"
console.log(joined);
console.log(typeof joined);

let merged="1"+2
console.log(typeof merged);

// the data type of first variable is considered and rest will be treated acccording to its data type
console.log(typeof ("1"+2+2)); // will give 122
console.log(typeof (1+2+"2")); // will give 32 

// *** type of all we remain string at last!

console.log(+true) // wil give 1 i.e due to + this get converted to integer
console.log(+false) // wil give 0
console.log(+"") // wil give 0


// incerament operator both pre and post!

let x=100;
// x++;
// console.log(x);

let y=x;
// ++y;
// console.log(y);

const z=++x // first the value of x get increased then it will be stored in z
console.log(z);

const z1=y++; // now here first it will store value of y in z and then incerses the value of y
console.log(z1);


