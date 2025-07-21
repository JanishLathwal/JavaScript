let myDate=new Date()

// *** new is used to create an object!.....is we use date() only then it will give a String!!!
console.log(myDate)
console.log(myDate.toString()) //will give both date and time
console.log(myDate.toDateString()) //will give date only
console.log(myDate.toLocaleString()) //will give date and time in different pattern
console.log(myDate.toLocaleDateString()) //will give date only
console.log(typeof myDate); // this will give ** object **

let mynewdate= Date();
console.log(typeof mynewdate) // this will give ** string ** 

let createdate= new Date(2025,6,21,4,50,10); //date and time
// console.log(createdate.toDateString())
console.log(createdate.toLocaleString())

let createnewdate= new Date("2025-07-21")
console.log(createnewdate.toLocaleString())

let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(createnewdate.getTime()); //return time in milli seconds from 1st jan 1970 to till given date....which will make it easy to compare the dates

console.log(Math.floor(Date.now()/1000));
let newdate1=new Date()
console.log(newdate1.getMonth()+1) // 0 based indexing of months
console.log(newdate1.getDay());

newdate1.toLocaleString('default',{
    weekday:"long",
    // this is acting like an object!
})