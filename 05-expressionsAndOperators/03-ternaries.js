// Ternaries

// Ternaries are a shorthand version of an if else if statement

let x = 6

// if statement
if (x > 0) {
    console.log('yes');
} else {
    console.log('no')
};

// ternary
(x > 0) ? console.log('yes') : console.log('no');

// conditional statement
if (x == 0) {
    console.log('Hello')
} else if (x < 0) {
    console.log('Hi')
} else {
    console.log('Goodbye')
}

//ternary operator
let x = 6;

(x == 0) ? console.log('Hello') : (x < 0) ? console.log('Hi') : console.log('Goodbye')

let x = 28;
(x >= 25) ? console.log('Yay! You can rent a car!') :  (x >= 21) ? console.log('Yay! You can drink!') : (x >= 18) ? console.log('Yay! You can vote!') : console.log('Sorry you\'re too young to do anything fun');

let yep = -8;

(yep < 0 && yep > -10) ? console.log('worked') : (yep > 0) ? console.log('worked!') : console.log('didn\'t work');
