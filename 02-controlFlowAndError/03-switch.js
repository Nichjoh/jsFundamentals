// SWITCH

let friend = 'Nic'

switch (friend) {
    case "Condition":
        console.log('Hey Tom, when are you going rock climbing?');
    break;
    case "Kenn":
        console.log('Hey Kenn, wanna play Catan?');
    break;
    case "Carolyn":
        console.log('Hey Carolyn, when are we playing DnD?');
    break;
    default:    //something needs to be displayed so we need a default
        console.log(`I'm sorry, ${friend}, but do I know you?`)
}

// String interpolation allows us to create a placeholder for the value of a variable that we choose to assign

let dessert = 'pudding';

switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
    break;
    case 'cake':
        console.log("Cake is great!");
        break;
    case 'ice cream':
        console.log('I scream for ice scream!');
        break;
        default:
        console.log('Sorry, ${dessert} is not on the menu.')
}

let yep = -8

switch (true) {
    case (yep< 0 && yep > -10):
    console.log('worked');
    break;
    default:
    console.log('didnt\'t work');
}