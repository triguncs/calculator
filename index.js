let expression = '';

const buttonsContainer = document.querySelector(".js-buttons");

buttonsContainer.addEventListener("click", changeDisplay);

function changeDisplay(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }
  value = event.target.innerText;
  if (value === '=') {
    if (expression === '') {
      return;
    } else {
      calculate();
      expression = '';
      return;
    }
  }

  if (value === 'C') {
    expression = '';
    document.querySelector('.js-display').innerText = expression;
    return;
  }

  expression += value;
  document.querySelector('.js-display').innerText = expression;
}

function calculate() {
  let processedExpression = expression.replace('%','/100');
  let result = eval(processedExpression);
  expression = Number(result.toFixed(6));
  document.querySelector('.js-display').innerText = expression;
}