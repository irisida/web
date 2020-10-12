
const defaultResult = 0
let currentResult = defaultResult;

const getUserInput = () => {
  return parseInt(userInput.value);
}

const add = () => {
  const inputNumber = getUserInput();
  const operation = `${currentResult} + ${inputNumber}`
  currentResult = currentResult + inputNumber;
  outputResult(currentResult, operation);
}


const subtract = () => {
  const inputNumber = getUserInput();
  const operation = `${currentResult} - ${inputNumber}`
  currentResult = currentResult - inputNumber;
  outputResult(currentResult, operation);
}


addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)


//currentResult = ((initialValue + 10) * 3) / 2 - 1;

//operation = `${initialValue} + 10 * 3 / 2 -1`;


