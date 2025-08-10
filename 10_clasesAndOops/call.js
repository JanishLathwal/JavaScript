function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // i want the abouve function to set the username!
    SetUsername(username) //this will only give the refrence of username! and after caliing the call will  pop() out of the stack and then the refrence will be gone!
    
    SetUsername.call(this, username)
    // now the SetUsername function will use this given by createUser! and hold the refrence of the SetUsername function
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);