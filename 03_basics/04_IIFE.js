// Immediately Invoked Function Expressions (IIFE)
// means calling function immediately afer declaring

// IIFE creates a local (function) scope for your variables, so they don’t interfere with global variables.
// IIFE is used to avoid polluting global scope (i.e. global variable and other globally declared )

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

const one=(function(){
    console.log("hello user");
})();

// IIFE using arrow function!
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')