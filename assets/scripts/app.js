const dafaultResult = 0
let currentResult = dafaultResult;
// let calculationDescription;

function add(){
    currentResult = currentResult + userInput.value;
 //   calculationDescription = `${dafaultResult} + ${userInput.value}`;
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add)