//  const tinder= new object()

const tinder={}

tinder.userId="1234abcd";
tinder.name="sammy";
tinder.isLoggedIn=false;

// console.log(tinder)

// nested objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// ways to combine two or more objects!
const obj3 = { obj1, obj2 } //same problem as that in case of array merging
const objtwo3 = Object.assign({}, obj1, obj2, obj4)

// best approach!
const objthree3 = {...obj1, ...obj2}
console.log(obj3);

// storing objects in array!
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email="jaat@gamil.com";
console.log(tinder);

console.log(Object.keys(tinder)); //to print all keys
console.log(Object.values(tinder)); //to print all values
console.log(Object.entries(tinder)); // to print all key-value pairs 

// to check if the object has this property or not!:-> true/false
console.log(tinder.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// to avoid repeatitive use of course.courseInstructor
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// Json data type!
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]