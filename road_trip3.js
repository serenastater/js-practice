//JSRT3, Level 1



//JSRT3, Level 1

function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  if (userChoice == 1) {
  	return function() {
    	alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
    	alert("Looks like you want the Lake of Despair!");
    };
  } else {
    return function() {
    alert("The Caves of Catastrophe!");
    };
  }
}

adventureSelector(3)();

//JSRT3, Level 1

var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function(arrayCell) {
                    return arrayCell[0] + " " + arrayCell[1];
});

//JSRT3, Level 1

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  if(fear < 200){
    return confirm("Fear level: LOW\nStill wanna ride?");
  } else if(fear >= 200 && fear <= 300) {
    return confirm("Fear level: MEDIUM\nThink you'll make it?");
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);
