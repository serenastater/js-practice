//JSRT2, Level 5

function numStrings(list) {
  var count = 0;
  for (var i = 0; i < list.length; i++) {
    if (typeof(list[i]) == "string") {
      count++;
    }
  }
  return count++;
}

//JSRT2, Level 4

function changePowerTotal(totalMW, currentGen, genStatus, genPower) {
  if (genStatus == "on") {
    totalMW += genPower;
    alert("Generator #" + currentGen + " is now " + genStatus + " adding " + genPower + " for a total of " + totalMW + "!");
  } else if (genStatus == "off"){
    totalMW -= genPower;
    alert("Generator #" + currentGen + " is now " + genStatus + " removing " + genPower + " for a total of " + totalMW + "!");
  }
  return totalMW;
}

//JSRT2, Level 3

var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;

while(ageIsCorrect == false) {
  confirm("You entered " + userAge + ". Is this correct?");
  if(confirm == true) {
    ageIsCorrect = true;
    alert("Great! Your age is logged as " + userAge + ".");
  }
}

//JSRT2, Level 2

var totalGen = 19;
var totalMW = 0;

for(var currentGen = 1; currentGen <= totalGen; currentGen++) {
  if(currentGen % 2 != 0) {
    console.log("Generator #" + currentGen + " is off.")
  } else if (currentGen <= 4){
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else {
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  }
}

//JSRT2, Level 2

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  if(monthNumber % 4 === 0) {
    var sheepToRemove = numSheep * 0.75;
    console.log("Removing " + sheepToRemove + " sheep from the population.");
    numSheep = numSheep - sheepToRemove;
  } else if (numSheep > 10000) {
    var halfSheep = numSheep / 2;
    console.log("Removing " + halfSheep + " sheep from the population.");
    numSheep = numSheep - halfSheep;
  }
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//JSRT2, Level 2

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  if (numSheep > 10000) {
    var sheepToRemove = numSheep / 2;
    console.log("Removing " + sheepToRemove + " sheep from the population.");
    numSheep = numSheep - sheepToRemove;
  }
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

//JSRT2, Level 1

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen <= 4){
  totalMW += 62;
  console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  currentGen++;
}

for(currentGen = 5; currentGen <= totalGen; currentGen++) {
  totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}
