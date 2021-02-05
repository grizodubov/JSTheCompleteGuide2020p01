const dafaultResult = 0;
let currentResult = dafaultResult;
let logEntries = [];

// Gets input from the input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates ans wrights calculation log
function createAndWrightOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescriptions = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescriptions); // from vendor file
}

function wrightToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
    const logEntrie = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNumber,
      result: newResult,
    };
    logEntries.push(logEntrie);
    console.log(logEntries);

}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWrightOutput("+", initialResult, enteredNumber);
  wrightToLog('ADD', initialResult, enteredNumber, currentResult)
}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWrightOutput("-", initialResult, enteredNumber);
  wrightToLog("SUBSTRACT", initialResult, enteredNumber, currentResult);

}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWrightOutput("*", initialResult, enteredNumber);
  wrightToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWrightOutput("/", initialResult, enteredNumber);
  wrightToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
