console.log("//--- Variables Example ---");

var a = 10;
console.log(a);  // Output: 10

var a = 20;  // Redeclaration allowed with var
var a = 30;  // Redeclaration allowed with var
console.log(a);  // Output: 30, the value is overwritten

function letSample() {
    let b = 60;  // let allows declaration within the block scope
    console.log(b);  // Output: 60
    b = 90;  // Reassignment allowed with let
    console.log(b);  // Output: 90
    // let b = 120; // Redeclaring b would cause an error: "SyntaxError: Identifier 'b' has already been declared"
}
letSample();

const c = 150;
console.log(c);  // Output: 150
// c = 200; // This would cause an error: "TypeError: Assignment to constant variable."

console.log("//--- Data Types Example ---");

function dataTypeSample() {
    var numberType = 24;  // Number
    console.log(typeof(numberType));  // Output: number

    var stringType = 'Jane Smith';  // String
    console.log(typeof(stringType));  // Output: string

    var booleanType = false;  // Boolean
    console.log(typeof(booleanType));  // Output: boolean

    var undefinedType;  // Undefined
    console.log(typeof(undefinedType));  // Output: undefined

    var nullType = null;  // Null, but typeof returns 'object' (a known JavaScript quirk)
    console.log(typeof(nullType));  // Output: object
}
dataTypeSample();

console.log("------- Synchronous Example --------");

function syncSample() { 
    console.log("Initiate Step 1");
    console.log("Initiate Step 2");
    console.log("Initiate Step 3");
    console.log("Initiate Step 4");
    console.log("All Steps Completed");
}
syncSample();  // Synchronous: Executes one line after another.

console.log("------- Asynchronous Example --------");

function asyncSample() {
    console.log("Operation A");
    console.log("Operation B");

    setTimeout(() => {
        console.log("This message appears after 2 seconds");  // Executes after a delay of 2 seconds
    }, 2000);

    console.log("Operation C");
    console.log("Operation D");
}
asyncSample();  // Asynchronous: setTimeout allows the code to continue while it waits for 2 seconds.