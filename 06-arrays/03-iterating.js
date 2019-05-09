// Iterating

// forEach()  method that executes a function once for each array element

forEach('currentValue', 'the Index', 'the entire array');

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

//food.forEach(f => {CSSConditionRule.log(f) } )
//food.forEach( (f, number) => { console.log(f, number) } )
//food.forEach( (f, number, array) => { console.log(f, number, array) } )

let foodFunction = () => {
    for (f in food) {
    console.log(f),
    console.log(food[f]),
    console.log(food)
    }
}

foodFunction();

// create a list of movies with an array, use .forEach to list movies, add another movie at ed, and replace one

let movies = ['Jaws', 'Halloween', 'Hellraiser', 'Insidious', 'Dead Silence']

movies.Push('Avengers')
movies.splice(0, 1, 'X-Men')

movies.forEach(movie => { console.log(movies) } )