//****** global object in browser is: Window obj!

const newuser={
    username:"Janish",
    price:999,

    greeting:function(){
        console.log(`${this.username} ,welcome to our website!`);
        console.log(this);
    }
}
newuser.greeting();
newuser.username="Lathwal"
newuser.greeting();

// this will give empty object!
console.log(this);

let user=function(){
    console.log(this.greeting);  //this will not work in function
}
user()



// arrow function!
let user1=() => {
    console.log(this.greeting);  //this will not work in arrow function
}
user1()

let add=(num1,num2)=>{
    return num1+num2
}

console.log(add(4,4))

// can also use this syntax!
let addtwo=(num1,num2) => (num1+num2) //this () will return the o/p automatically
console.log((addtwo(4,8)));

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()