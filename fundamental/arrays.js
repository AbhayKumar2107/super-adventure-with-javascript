let myArray1 = [1, 2, 3, 4, 5, 6];
let myArray2 = [7, 8, 9, 10];


myArray1.push(9);
// console.log(myArray1);

myArray1.pop();
// console.log(myArray1);

myArray1.unshift(9);
// console.log(myArray1);

myArray1.shift();
// console.log(myArray1);

let isInclude = myArray2.includes(9);
// console.log(isInclude);

let theIndex = myArray2.indexOf(9)
// console.log(theIndex);

let newArray = myArray1.join();
// console.log(newArray);

let useslice = myArray1.slice(0, 4);
// console.log(useslice);        it doesn't change original array.
// console.log(myArray1);

let useSplice = myArray1.splice(0, 4);
// console.log(useSplice);       it changes the original array.
// console.log(myArray1);



// to join two array we can use concat method.
let newArray2 = myArray1.concat(myArray2);
// console.log(newArray2);

// another way to joim two or more arrays
let newArray3 = [...myArray1, ...myArray2];
// console.log(newArray3);

let arr_in_arr = [1, 2, 3, [5, 6, [7, 8, 9]]];
// console.log(arr_in_arr.flat(2));



// to create an array from String.
let newArray4 = Array.from("abhay"); 
// console.log(newArray4);
