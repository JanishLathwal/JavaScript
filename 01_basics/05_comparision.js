// operators like >,<,>=,<=,== etc

// these comparision operator converts the null to 0 and then compare it!
// but not equality operator!
console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true null is converted to 0

console.log("3">2); // this will give true bcoz the data type is changed to integer

// try to do comparision with undefined!


// strict check :-> ===, this will also compare the datatypes of the values given!

console.log("3"===2); //this will give false!

console.log("2">true); // this will return true


