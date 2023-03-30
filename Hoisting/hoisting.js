// In JavaScript, a variable can be declared after it has been used
// Also we can get function even before it is called as given in the below example but it cannot get arrow function and console log the undefined because it will take it as a variable


// This is the example of hoisting
// We can call function any where below or above that function
getName();

// But this will console undefined
console.log(x);


var x = 7;

function getName(){
    console.log("My name is Ghouse");
}
// This will Console log the whole function
console.log(getName);

// This will just call the function and console log My name is Ghouse
getName();

var fun = () =>{
    console.log("This is an Arrow function");
}

// This will print the fun arrow function
fun();

// This will 
