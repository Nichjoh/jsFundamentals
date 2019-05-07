// IF ELSE

weather = 75;

if (weather < 70) {
    console.log('wear a jacket')
} else {
    console.log('No jacket necessary!')
}

//IF ELSE SYNTAX
//if (condidtion) {
// logic
//console.log(logic)
// else
// console.log(error

let name = 'Nic';

if (name == 'Nic') {
    console.log('Hello, my name is Nic')
} else {
    console.log('Hello, what is your name?')
};

let name = 'nIc';

if (name[0] == name[0] .toUpperCase ()) {
    firstletter = name[0] + name.slice(1) .toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0) .toUpperCase() + name.slice(1) .toLowerCase()
    console.log(otherLetters);
}

// ELSE IF

//if (condition) {
//    logic a
// } else if (different condition) {
// logic b
// } else {
// logic c
// }

let age = 28

if ( age >=25) {
    console.log('Yay! You can rent a car!')
}
else if ( age >= 21) {
    console.log('Yay! You can drink!')
}
else if ( age >= 18) {
    console.log('Yay! You can vote!')
}
else (age < 18) {
    console.log('Sorry, youre too young to do anything.')
}