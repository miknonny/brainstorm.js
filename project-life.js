function canYouSoptTheProblem() {
  //"use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log('happy happy');
  }
}

canYouSoptTheProblem();

var promptDirection = function (question) {
  var result = prompt(question, "");
  if (result.toLowerCase() === "left") return "L";
  if (result.toLowerCase() === "right") return "R";
  throw new Error("invalid direction: " + result);
};

function look() {
  if (promptDirection("which way?" === "L")) {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log('Something went wrong: ' + error);
}