// shallow copy-> copy by reference... i.e. copy will be given the reference of original memory
// deep copy:-> copy by value i.e. no memory reference is given 

let array=[1,2,3,45,6]
const names=['jaat','janish']
console.log(array);

//new Array() is a constructor to create array!
const Arr=new Array(5) // this will create empty array of length 5 
console.log(Arr);

const array2=new Array(12,1,2,4,6) //create array with these elements
console.log(array2);
// ** imp:- copy operation in array always create shallow copies

array.push(7)
array2.push(100)
array.pop()

array.unshift(500)
console.log(array);
array.shift()
console.log(array);
console.log(array.indexOf(6));
// console.log(array.find(500));
console.log(array.includes(7));

const newarray=array.join() //convert array to string (comma seperated values)
console.log(newarray)

//**** slice and splice ****
console.log("A: ",array);
console.log(array.slice(1,4));// slice donot change the original array 

console.log("B: ",array);
console.log(array.splice(1,3)); //splice will cut out the whole portion from the array
console.log("C",array);

// imp methods of array

const arr1=["janish",'lathwal',"sourabh","lathwal"]
const arr2=["shubham","lathwal"]

const new_arr=arr1.concat(arr2);
console.log(new_arr);

// this is called spread method, used to concat two or more strings
const new_arr2=[...arr1,...arr2]
console.log(new_arr2);

const arr3=[1,2,[3,4,5],[6,7,[8,9]]]
const new_arr3=arr3.flat(2) //can also give Infinity
console.log(new_arr3);

console.log(Array.isArray("janish"));
console.log(Array.from("janish"));
console.log(Array.from({name:"janish"})); //we have to tell that we want array of keys or values!

let val1=100
let val2=200
let val3=300
console.log(Array.of(val1,val2,val3));

 




