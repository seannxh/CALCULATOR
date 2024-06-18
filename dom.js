/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
// Query for the parent calculator element and output display
// Query for the parent calculator element
// Query all buttons with the class 'button'
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let currentNumber = '';
let firstNumber = null;
let operator;
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  })
});
calculator.addEventListener('click', (event) => {
  const target = event.target;
  const value = target.innerText
  console.log(event.target.innerText);
  if (target.classList.contains('number')) {
    currentNumber += value;
    display.innerText = currentNumber;

  }
  if(target.classList.contains('operator')){
    if(currentNumber === '') return; //if if statement dioesbt have curlrly braces its all on the same line
    if(value === 'C'){
      currentNumber = '';
      firstNumber = null;
      operator = null;
      display.innerText = '0';
      return;
    }
    firstNumber = parseInt(currentNumber);
    operator = value;
    currentNumber = '';
  }
  if(target.classList.contains('equals')){
    if (firstNumber === null || currentNumber === '') return;
    let secondNumber = parseInt(currentNumber)
    let result = 0;
    if (operator === '*'){
      result = firstNumber * secondNumber
    }
    if (operator === '+'){
      result = firstNumber + secondNumber
    }
    if (operator === '/'){
      result = firstNumber / secondNumber
    }
    if (operator === '-'){
      result = firstNumber - secondNumber
    }
    display.innerText = result;
    firstNumber = null;
    operator = null;
    currentNumber = result;
  }
})
