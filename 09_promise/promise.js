const promiseOne= new Promise(function(resolve,reject){
    // do an async call!
    // DB call ,cryptography,network

    setTimeout(()=>{
        console.log("Async task is completed!");
        resolve(); // we have to call to run the task!
    },1000)
})

promiseOne
.then(function(){
    console.log("promise fullfiled!")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2 task completed!");
        resolve();
    },2000)
}).then(function(){
    console.log("task completed along with promise 2!");
})

// we can also give some data inside resolve() function

//  You => "Hey JavaScript, here's a task. When it's done, call this function (resolve) and give it the result."
// JavaScript => "Cool, once done, I'll give that result to .then()"


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:'janish lathwal',email:'janishlathwal@gmail.com'})
    },1000);
})
promiseThree.then(function(user){
    console.log(user);
})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username: "hitesh", password: "123"})
        }else{
            reject("the task is failed..!ERROR...")
        }
    },1000);
})

promisefour
.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promise is either rejected or resolved!"));
// finally will always execute no matter the promise is resolved or rejected!


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// async - await fucntion used instead of response or reject!
// await is used inside an async function to pause the execution of the function until the Promise is resolved.
// Execution pauses at each await until the promise is done.

async function consumepromiseFive(){
    try{
        const resolve=await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error)
    }
}

consumepromiseFive();

// using fetch() ********************-----------------------------------------
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() //converting to object!
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
