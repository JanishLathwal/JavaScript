const user={
    name:"janish",
    login_count:5,
    isLoggedin:true,

    getUserDetails:function(){
        console.log(`name of the user is: ${this.name}`);
        console.log(this)
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,isLoggedin){
    this.username=username;
    this.isLoggedin=isLoggedin;
    this.greetings=function(){
        console.log(`welcome Mr. ${this.username}`);
    }
    return this; // not necessary to write! its by default!
}
const userone=new User("Janish",true);
const usertwo=new User("Vikram Singh",true);
// if we dont use new keyword(constructor) the latest user will overwrite the values of the user function!
// new will give us the copy of the object 
console.log(usertwo);





