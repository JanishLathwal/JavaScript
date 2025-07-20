// string concatination
let str1="janish "
let str2="lathwal"
let age=19

// bad practice
console.log(str1+str2);

// recomended method
console.log(`my name is ${str1} ${str2} and my age is ${age}`)
console.log(str1[0])

console.log(str1.__proto__)
console.log(str1.length);
console.log(str1.toUpperCase());

console.log(str1.charAt(2));
console.log(str1.indexOf('n'));


let substring=str1.substring(0,4) //(a,b) in this b is exclusive!
let substring2=str2.slice(-6,6)
console.log(substring2);

let name="  kansh  "
console.log(name);
console.log(name.trim());

const url="http://janish-lathwal.com/janish%20Jaat";
console.log(url.replace('%20',"lathwal"));
console.log(url.includes("Jaat"));
console.log(url.split("-"));






