const accountId= 25022006
let accountEmail= "janish@gmail.com"
var accountPass="12345"

/*
dont use Var to declare any variable!
bcoz:-> of the issue in block scope and functional scope!
*/

let accountState;
// its space will be given in the memory but nothing is stored in it!

accountCity="Karnal"
// bad practice to declare the variable like this!

// accountId=2
console.log(accountId)
console.table([accountId, accountEmail,accountPass,accountCity,accountState])