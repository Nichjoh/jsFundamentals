//Parameters

function hi(parameters) {
    console.log(parameters)
    console.log('HI')
}

function pet(animal) {
    console.log(`I have an ${animal} for a pet.`);
}

pet('cat');
pet('dog');
pet('SNEK')
// use back ticks for INTERPOLATION

function myName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName
    console.log(`Hola, me llamo ${fullName}.`) 
}

myName('Nic', 'Johnson');