//Types
//Boolean

let on = true
console.log(on)

let off = false;
console.log(off)

//Null
//Null = empty value (not 0, not undefined);

let empty = null
console.log(empty);

//Undefined
// No value assigned

let undef = undefined;
console.log(undef);

let grass;
console.log(grass);

//Numbers
let degrees = 90;
console.log(degrees);

let precise = 9999999999999999;
console.log(precise);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//Strings
//Strings are any value within quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof firset);
console.log(typeof second)

let third = 1050 + '100';
console.log(third);




//Challenge!!
/*
firstName
lastName
houseNumber
street
city
state
zipcode

set each variable to its respective type.

console.log your whole address (with the space between variables).
*/

let one = 'Nic'; 
let two = 'Johnson';
let three = '10734';
let four = 'Thistle Ridge';
let five = 'Fishers';
let six = 'Indiana';
let seven = '46038';
console.log(one, two + ',', three, four + ',', five, six, seven)


//Objects
// A collection of key-value pairings.
// Hold multiple datatypes

// Denotes by { }
// Has keys and values(color (key): 'blue' (value)), separated with a colon.
// Each key is separated with a comma

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};

console.log(burritosNow)
console.log(typeof burritosNow);

//Arrays

// Arrays are great for lists
// Denotes by [ ]
//Has values ('blue', 'green' 'yellow'), separated by commas.

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos)