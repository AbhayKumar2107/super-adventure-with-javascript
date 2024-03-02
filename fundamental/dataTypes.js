// there are only two types of data types 
// 1. primitive  and
// 2. non-primitive 

// In primitive, there are 7 types...

//=====================================================================================================================

//1.1 Number :  for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1)

let a = 1234;
let b = 12.34;

// any operation with "NaN" returns "NaN" 

console.log(( NaN + 1 )); // NaN
console.log(( 3 * NaN )); // NaN
console.log(( "not a number" / 2 - 1 )); // NaN


//======================================================================================================================

// 1.2 BigInt : for integer numbers of arbitrary length or number excceded the lenght of number data type.

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992


//======================================================================================================================

//1.3 string : A string in JavaScript must be surrounded by quotes.

//In JavaScript, there are 3 types of quotes.

// 1. Double quotes: "Hello".
// 2. Single quotes: 'Hello'.
// 3. Backticks: `Hello`.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;



//======================================================================================================================

// 1.4 Boolean(logical type): The boolean type has only two values: true and false.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked


//======================================================================================================================

// 1.5 Null : for unknown values – a standalone type that has a single value null.

let age = null;
console.log(age);  // null


//======================================================================================================================

// 1.6  Undefined :  for unassigned values – a standalone type that has a single value undefined.

// let age2;
// alert(age2); // shows "undefined"

// or 

// let age3 = 100;
// // change the value to undefined
// age = undefined;
// alert(age3); // "undefined"



//======================================================================================================================

// 1.7  symbol : for unique identifiers.

const x = Symbol('hey');
console.log(x); // Symbol(hey)


//======================================================================================================================

// and non-primitve has only one type that is object.

// 2.1  objects :  for more complex data structures.

const obj = {
    name : "aka",
    age : 2
}
console.log(obj.age); // 2

