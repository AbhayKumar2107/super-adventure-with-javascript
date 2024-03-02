// here we are going to perform some operaion on strings and try to learn most common methods used in strings.

// So strings can be created as primitive, by strings literals or as objects , using by String() constructor.

const string1 = "A string primitive"; // double quote
const string2 = 'Also a string primitive'; //single quote
const string3 = `Yet another string primitive`; // and with backtik 
const string4 = new String("A String object");


//string.length()
let strLength = string1.length;  // this is the property of strings to give the length of the strings.
// console.log(strLength);



// following are the most used string methods...



// string.prototype.at() 
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
// console.log(`An index of ${index} return the character ${sentence.at(index)}`); // positive search 

const sentence3 = 'The quick brown fox jumps over the lazy dog.';
let index3 = -6;
// console.log(`An index of ${index3} return the character ${sentence3.at(index3)}`); //negative search





// string.prototype.charAt()
const sentence2 = 'The quick brown fox jumps over the lazy dog.';
const index2 = 4;
// console.log(`The character at index ${index2} is ${sentence2.charAt(index2)}`); // positive search

const sentence4 = 'The quick brown fox jumps over the lazy dog.';
const index4 = 6;
// console.log(`The character at index ${index4} is ${sentence4.charAt(sentence4.length - index4)}`); // negative search

// at() is a newer addition to JavaScript compared to charAt(). According to MDN, both charAt() and at() are valid, but at() is more "succinct and readable". The ability to use negative indexes makes your code more concise since you can do things like myString.at(-2) instead of myString.charAt(myString.length - 2)




// string.prtotype.concat()
const str1 = 'Hello';
const str2 = 'World';
//console.log(str1.concat(' ', str2)); // returns "Hello World".




// string.prtotype.charCodeAt()
const sentence6 = 'The quick brown fox jumps over the lazy dog.';
const index6 = 8;
// console.log(`Character code ${sentence.charCodeAt(index6)} is equal to ${sentence6.charAt(index6)}`);




//string.prototype.indexof()
// syntax: indexOf(searchString) or indexOf(searchString, position)
const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

//console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

//console.log(`The index of the second "${searchTerm}" is ${paragraph.indexOf(searchTerm,indexOfFirst + 1)}`);
// Expected output: "The index of the second "dog" is 38"




// string.prottype.endsWith()
//  syntax : endsWith(searchString) or endsWith(searchString, endPosition)

const strr1 = 'Cats are the best!';
//console.log(strr1.endsWith('best!'));
// Expected output: true

//console.log(strr1.endsWith('best', 17));
// Expected output: true

const strr2 = 'Is this a question?';
//console.log(strr2.endsWith('question'));
// Expected output: false




//string.prototype.startsWith()
// syntax : startsWith(searchString) or startsWith(searchString, position)
const str3 = 'Saturday night plans';

//console.log(str3.startsWith('Sat'));
// Expected output: true

//console.log(str3.startsWith('Sat', 3));
// Expected output: false




//string.prototype.toUpperCase() and .toLowerCase()

const sentence7 = 'The quick brown fox jumps over the lazy dog.';
//console.log(sentence7.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."

const sentence8 = 'The quick brown fox jumps over the lazy dog.';
//console.log(sentence8.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."




// string.prototype.slice()
// syntax : slice(indexStart) or slice(indexStart, indexEnd).
const str = 'The quick brown fox jumps over the lazy dog.';

//console.log(str.slice(31));
// Expected output: "the lazy dog."

//console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

//console.log(str.slice(-4));
// Expected output: "dog."

//console.log(str.slice(-9, -5));
// Expected output: "lazy"




// string.prototype.subString()
// syntax : substring(indexStart) or substring(indexStart, indexEnd)
const str4 = 'Mozilla';

//console.log(str4.substring(1, 3));
// Expected output: "oz"

//console.log(str4.substring(2));
// Expected output: "zilla"


// difference between slice and substring go to this url --> https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring.



// string.prototype.split()
// syntax : split(separator) or split(separator, limit).

const str5 = 'The quick brown fox jumps over the lazy dog.';

const words = str5.split(' '); // seprate according to white spaces 
//console.log(words[3]);
// Expected output: "fox"

const chars = str5.split(''); // seprate according to character
//console.log(chars[8]);
// Expected output: "k"

const strCopy = str5.split();
//console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]





//string.prototype.trim()
const greeting = '   Hello world!   ';

//console.log(greeting);
// Expected output: "   Hello world!   ";

//console.log(greeting.trim());
// Expected output: "Hello world!";





// string.prototype.repeat()
const mood = 'Happy! ';

//console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! 




// string.prototype.valueof()
const stringObj = new String('foo');

//console.log(stringObj);
// Expected output: String { "foo" }

//console.log(stringObj.valueOf());
// Expected output: "foo"





//string.prototype.replaceall()
const paragraph1 = "I think Ruth's dog is cuter than your dog!";

//console.log(paragraph1.replaceAll('dog', 'monkey'));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /Dog/gi;
//console.log(paragraph1.replaceAll(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"





//string.prototype.includes()
const str8 = "To be, or not to be, that is the question.";

//console.log(str8.includes("To be")); // true
//console.log(str8.includes("question")); // true
//console.log(str8.includes("nonexistent")); // false
//console.log(str8.includes("To be", 1)); // false
//console.log(str8.includes("TO BE")); // false
//console.log(str8.includes("")); // true




////string.prototype.lastIndexOF()

const paragraph5 = "I think Ruth's dog is cuter than your dog!";
const searchTerm5 = 'dog';
//console.log(`Index of the last ${searchTerm5} is ${paragraph5.lastIndexOf(searchTerm5)}`,);
// Expected output: "Index of the last "dog" is 38"

"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2


