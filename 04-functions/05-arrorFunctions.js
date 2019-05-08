// Arrow functions

// Normal
function coffee() {
    console.log('coffee is good');
}

// Fat Arrow
let coffee = () => {
    console.log('fat arrow coffee');
}
coffee();

//Concise body
//Concise bodies do not parantheses, unless you have more than one parameter
//Return is implied
//Line breaks are bad
let apples = (x, y) => console.log(`There are ${x} apples and ${y} pears.`);
apples(10)

//Block body
let apples = (x) => { console.log(`There are ${x} appples`); }
apples(10);