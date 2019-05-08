// FOR OF LOOPS

// The for... of statement creates a loop iteratin over iterable objects, meaning it can numerically look over these items.

let student = {name: 'Peter', awesome: true, degree: 'JavaScript', week: 1};
for ( item of student) {
    console.log(item);
}
//student is not iterable

let catArray = ['tabby', 'british shorthair' , 'burmese' , 'maine coon' , 'rag doll'];
for (cat of catArray){
    console.log(cat)
}

for (cat in catArray){
    console.log(cat);
}