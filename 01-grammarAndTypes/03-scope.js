// Scope
// JavaScript has function scope.
// Scope determines the accessibility of these variables
// Variables defined inside a function are NOT accessible from outside the function.

// Local and Global scope

let x = 12

function scope() {
    let x = 33
    console.log(x)
}
scope();
console.log(x);

let x = 12

function coffee()  {
    x = 33
    console.log(x);
}
coffee()
console.log(x);

// Var vs Let

var x = 12

function scope()  {
    var x = 33
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);

