const dafaultResult = 0;
let currentResult = dafaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWrightOutput(operator, resultBeforeCalc, calcNumber){

}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescriptions = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescriptions);
}

function substract(){
  const enteredNumber = getUserNumberInput();
  const calcDescriptions = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, calcDescriptions);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const calcDescriptions = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescriptions);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const calcDescriptions = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescriptions);  
}

addBtn.addEventListener("click", add);
