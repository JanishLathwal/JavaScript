let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// adding a function named janish in the object 
Object.prototype.janish=function(){
    console.log('janish is present in all objects');
}

Array.prototype.heyjanish=function(){
    console.log(`janish lathwal says hello!`);
}

heroPower.janish();
myHeros.janish(); // all the methods of the object are accessible by arrays,strings,objects....
myHeros.heyjanish();
// heroPower.heyjanish();// but objects cant access the methods present in arrays,strings...only! 



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // inheritance!
}
Teacher.__proto__ = User;


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//inhereting teacher
// TeachingSupport will now inherit properties & methods from Teacher.

let anotherUsername = "ChaiAurCode     "
// setting another method or function!
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()