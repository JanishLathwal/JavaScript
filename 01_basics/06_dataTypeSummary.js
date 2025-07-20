// two categories of data types:-> 1. primitive and 2. non-primitive

// primitive:->
// 7 types:- string,null,boolean,number,symbol,Bigint,undefined

// non primitive or refference:- Objects,Arrays,Functions

// symbol is a data type used to create unique identifiers even if we give same value to the variables

// array:
const names=["Janish","Shivam"]

// Objects:
let my_obj={
    name:"JANISH",
    age: 19,
}

// function:
// variable method
const myFunction=function(){
    console.log("JANISH LATHWAL");
}

//  ******* type of null is object!*********
//  ******* typeof all non primitive data types is object ! function is function object  


// understanding concept of memory allocation

// two types of memory: stack and heap...stack(all premetive datatypes) and heap(all non premetive datatypes)

// imp: agar heap mein memory allocate hogi tou kisi bhi varible ko us memory ka by reference access milega.........
// in case of stack memory allocation us memory ki copy milegi!

let name="Janish Lathwal"
let name2=name;
name2="janish lathwal jaat"
console.log(name);
console.log(name2);

let empone={
    name:"janish lathwal",
    age: 19,
}
let emptwo=empone
emptwo.name="janish"

console.log(empone.name)
console.log(emptwo.name)




