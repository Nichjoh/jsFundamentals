//Hoisting

console.log(scissors);
scissors = 'blue';

console.log(scissors);
var scissors

// JS read code twice. First time, it's looking for the LEFT HAND SIDE of variables and functions. The second time, it reads the RIGHT HAND SIDE and assigns values and expressions.

