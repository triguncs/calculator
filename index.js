let expression = '0';

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
      return;
    }
  }

  if (value === 'AC') {
    expression = '0';
    document.querySelector('.js-display').innerText = expression;
    return;
  }

  if (value === 'DEL') {
    if (expression === '0') {
      return;
    }

    expression = expression.slice(0, -1);

    if (expression === '') {
      expression = '0';
    }

    document.querySelector('.js-display').innerText = expression;
    return;
  }

  if (expression === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
    expression = '';
  }

  expression += value;
  document.querySelector('.js-display').innerText = expression;
}

function calculate() {
  let processedExpression = expression.replace('%','/100');
  let result = eval(processedExpression);
  expression = Number(result.toFixed(6));
  expression = JSON.stringify(expression);
  document.querySelector('.js-display').innerText = expression;
}