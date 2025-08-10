class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// inheritence from the class User!
class Teacher extends User{
    constructor(username, email, password){
        super(username) //in classes we dont need to use call function!
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse();
chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()

// to check chai is object of which class!
console.log(chai instanceof User);
// true bcoz: chai is instance of teacher which had inhereted user class!