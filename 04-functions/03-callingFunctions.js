// Calling Functions

function hi() {
    console.log('HI')
};

hi();

// create a function that, when invoked, lists out the numbers 1-10

function hi() {
    for(i = 1; i <=10; i++) {
        console.log(i)
    }
}

hi();

//given the array, create a function that lists out the values individually.

let arr = ['This', 'is', 'really', 'cool'];

function yo() {
    for(item of arr){
    console.log(item)
    }
}

yo(); 