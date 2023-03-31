// All the buttons
const btnDigits = document.querySelectorAll('.digits');
const btnOperators = document.querySelectorAll('.operator');
const btnEnter = document.querySelector('.enter');
const btnClear = document.querySelector('.clear');
const btnDel = document.querySelector('.del');
const btnAns = document.querySelector('.ans');
const btnSqrt = document.querySelector('.sqrt');
const btnPlusMinus = document.querySelector('.plus-minus');

//input fields
const subScreen = document.querySelector('.sub-screen');
const outputScreen = document.querySelector('#output-screen');

//previous answer
let prevAnswer = '';

// All digits
btnDigits.forEach(btn => {
  btn.addEventListener('click', () => {
    outputScreen.value += btn.textContent;
  });
});

//operator 
btnOperators.forEach(btn => {
  btn.addEventListener('click', () => {
    outputScreen.value += btn.textContent;
  });
});

//enter
btnEnter.addEventListener('click', () => {
  try {
    const result = eval(outputScreen.value);
    subScreen.value = outputScreen.value;
    outputScreen.value = result;
    prevAnswer = result;
  } catch (error) {
    subScreen.value = 'Error';
    outputScreen.value = '';
  }
});

//clear
btnClear.addEventListener('click', () => {
  subScreen.value = '';
  outputScreen.value = '';
});

//delete
btnDel.addEventListener('click', () => {
  let value = outputScreen.value;
  value = value.substring(0, value.length - 4);
  outputScreen.value = value;
});

//ans
btnAns.addEventListener('click', () => {
  outputScreen.value += prevAnswer;
});

//sqrt
btnSqrt.addEventListener('click', () => {
  const value = parseFloat(outputScreen.value);
  if (value >= 0) {
    const result = Math.sqrt(value);
    subScreen.value = `sqrt(${value})`;
    outputScreen.value = result;
    prevAnswer = result;
  } else {
    subScreen.value = 'Error';
    outputScreen.value = '';
  }
});

//plus-minus
btnPlusMinus.addEventListener('click', () => {
  const value = parseFloat(outputScreen.value);
  if (!isNaN(value)) {
    outputScreen.value = -value;
  }
});