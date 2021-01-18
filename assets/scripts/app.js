const dafaultResult = 0;
let currentResult = dafaultResult;

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescriptions = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calcDescriptions);
}

addBtn.addEventListener("click", add);
