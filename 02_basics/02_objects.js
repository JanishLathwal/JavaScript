// singleton object
// object.create

// onject literals

let mysym=Symbol("key 1");

let JsUser={
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mysym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// ways to access the class properties! 

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mysym])

// can change the properties of the class
JsUser.email = "hitesh@chatgpt.com"

// Object.freeze(JsUser) :- so that no one can change the propertires of class
JsUser.email = "hitesh@microsoft.com" // wil not work
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


