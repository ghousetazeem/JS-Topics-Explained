// Var, let and Const local Scope

function a(){
    //var is locally declared in function a
    var x = 2;
    console.log(x);
}
//This cannot be done because var is locally scoped
//console.log(x);
a();


function b(){
    //let is locally declared in function a
    let y = 4;
    console.log(y);
}
//This cannot be done because let is locally scoped
//console.log(x);
b();


function c(){
    //const is locally declared in function a
    const z = 4;
    console.log(z);
}
//This cannot be done because const is locally scoped
//console.log(z);
c();

//But for if else this works differently
if (true){
    var a = 10;
    console.log(a);
}
//Var is Globally Scoped in JS for all other curly braces programs except a function
console.log(a);

//And for let it doesnot works the same as var
//let is locally scoped in JS for all the curly braces
if(true){
    let b = 12;
    console.log(b);
}
//This shows the error in the console as let is Locally Scoped
//console.log(b);


//And for const, it also works same as let for all the curly braces
if(true){
    const c = 14;
    console.log(c);
}
// This also shows the error in the console
// console.log(c);


