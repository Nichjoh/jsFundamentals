//Returns

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else { 
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName)
    return capName
}

const myName = capitalizeName("nIchOlAs")

console.log(myName + ' how are you doing?')

// Make a tip calculator, have it return the value, capture that value in a VARIABLE, print it

function tipCalc(bill) {
    let tipAmount = (bill * .2);
    return tipAmount.toFixed(2)
  }
  let bill = 19.88
  let totalTip = tipCalc(bill);
  console.log(`If my bill is ${bill}, my tip will be ${totalTip}.`)