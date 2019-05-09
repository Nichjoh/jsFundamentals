// Length and others

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length)

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length)
console.log(colors.toString())


let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(typeof colors)
console.log(typeof colors.toString())

//challenge, check to work with an array, flip values within the array (what was in index 4 is now in 0, 3 to 1, etc.) using method only print the values of the newly arranged array

let arr = [1,2,3,4,5]
if(arr instanceof Array === true) {
    let revArr = arr.reverse(arr);
    //console.log(arr.toString())
    revArr.forEach(item => { console.log[item-1] } )
};