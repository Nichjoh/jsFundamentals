// Arrays

// Arrays are an object. THey are a container that can hold multiple datatypes.
// Has [ ] brackets
// Great for lists

let students = ['Sebastian', 'Eric', 'Michael', 16, 74, false, ['Nic', 'Charles', 'Ethan']]

//console.log(typeof students);
//console.log(students instanceof Array);
//console.log(students[1]) = Eric
//console.log(students [6][1]) = Charles


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

//food.push('Pizza')  //appends pizza to the end of array
//food.splice(1, 1, 'Bananas')
//food.splice(2, 0, 'Sweet Potato Pie')
//food.pop(); //removes the last item in my array
//food.shift(); // removes first item in my array
//food.unshift('Muffin', 'Apple') // adds elementsto beginning of array
console.log(food)

for (f in food) {
    console.log(food[f]);
    //console.log(f);
}

