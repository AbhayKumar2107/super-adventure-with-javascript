// There are three types of variables...

// 1. let

let someName = "akakaka";

//console.log(someName); // this will log to console --->  akakaka

someName = "abababa";   //  we can also change the data stored in the variable.

// console.log(someName);  // this will log to console --->  abababa

// let someName = "abababa" ; // This will throw an error that  Identifier 'someName' has already been declared




// 2. var 

var anotherName = "aaaaaa";
// console.log(anotherName); // This will print aaaaaa

anotherName = "bbbbbb"; // This will change aaaaa to bbbbbbb
// console.log(anotherName); // This print bbbbbb

var anotherName = "cccccc"; // this line doesn't show any error because it is possible to declare another variable with the same name. 
 // console.log(anotherName); // this  will show cccccc without any error.



// we can also use strict keyword to make javascript work as a modern standard defined rules


// 3. cosnt 

const name = "this will not change";

// name = "sure you can try to change it if you want"; // this will throw an error that Assignment to constant variable.

console.log(name); // this this will print "this will not change" if above assignment is commented.