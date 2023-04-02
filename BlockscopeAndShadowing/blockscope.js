// Basically code inside a curly bracket is called a block
// Multiple statements are grouped inside a blockso it can be written where JS expects single statements like in if, else, loop, functions, etc.

var a = 100;
{
    var a = 10;
    // In JS let and const are blocked scope, means you cannot access the let and const values outside the block but you can access the var value outside the block
    let b = 20;
    const c = 30;
    // Block values are stored inside seperate memory than global. They are stored in block.(The reason let and const are called block values)
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// This will give the error
console.log(b);
console.log(c);

// Shadowing of variables using var, let and const
// The shadow should not cross the scope of original otherwise it will give error

// Example of shadowing
// The shadow is not crossin the scope, so it will give the console
var x = 18;
{
    var x = 100;
    console.log(x);
    // The output of this block is 100 in console
}


// Examples with let and const
let y = 12;
{
    let y = 14;
    console.log(y);
    // This will also print the value 14
    // As the let is blocked scope
}

const z = 20;
{
    const z = 30;
    console.log(z);
    // This will also print the value 30
    // As the const is blocked scope
}

// This will give the error
// Shadowing Let with var is illegal shadowing and gives error
let n = 12;
{
    var n = 14;
}

// Note: Var values stored in global memory and hence can be accessed outside block as well whereas it's not the same case with let and const
