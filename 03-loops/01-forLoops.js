// FOR LOOPS

/*
A loop is a programming tool that repeats a set of instructions until a specified condition is met.
*/

const vacationSpot = ['Florence', 'Copenhagen', 'Instanbul'];
console.log(vacationSpot[0])
console.log(vacationSpot[1])
console.log(vacationSpot[2])

// Types of loops
/*
For statement
Do While statements
While statement
Labeled statement
Break statement
Continue statement
For in statement
For of statement
*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Challenge using a for loop count to 20 using 2's 

for(let i = 0; i <= 20; i+=2){
    console.log(i)
}
// 10 down to 0
for( i = 10; i >= 0; i-=1) {
    console.log(i)
}
// 0 down to 24
for( i = 0; i >=-24; i -=2) {
    console.log(i)
}
// Use a for loop to go through a name and display each letter individually

for ( ' intialization'; 'stopping condition'; 'iteration statement') {
}
    console.log('each letter individually')

    let name  = "Nic"    
for ( p= 0; p < name.length; p++) {
    console.log(name[p])
}

// make a loop where you add up all the numbers from 1 to 50 (1275)

let sum = 0;

for (let i = 1; i <= 50; i++) {  //i++ is one time through
    sum = sum+i;
}
console.log(sum)