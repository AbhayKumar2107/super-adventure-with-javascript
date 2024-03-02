
let num = 4044;

// console.log(num.toString());
// console.log(typeof(num.toString()));

// console.log(num.toString().split(0));
// we can also use string functions like above.


let num2 = 12.3445;
// console.log(num2.toFixed(2));
// console.log(typeof(num2.toFixed(2))); // return as a string.


// console.log(num2.toPrecision(2)); // returns 12 
//console.log(typeof(num2.toPrecision(2)));// returns string.


let num3 = 1000000000;
// console.log(num3.toLocaleString());


// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.3)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.sqrt(4)); // 2
// console.log(Math.pow(2, 3)); // 8



//  useful formaula to generate random number between two given numbers.

 
let min =10 ;
let max= 20 ;

console.log(Math.floor(Math.random()* (max-min + 1)) +min);
