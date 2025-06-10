const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

function updateDisplay() {
  display.value = expression || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('clear')) {
      expression = '';
    } else if (button.classList.contains('backspace')) {
      expression = expression.slice(0, -1);
    } else if (value === '=') {
      try {
        expression = expression
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/π/g, Math.PI)
          .replace(/e/g, Math.E)
          .replace(/√/g, 'Math.sqrt')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log')
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/Exp/g, 'Math.exp')
          .replace(/1\/x/g, '(1/');

        expression = eval(expression).toString();
      } catch {
        expression = 'Error';
      }
    } else if (value === 'x!') {
      try {
        const num = parseInt(expression);
        const factorial = n => (n <= 1 ? 1 : n * factorial(n - 1));
        expression = factorial(num).toString();
      } catch {
        expression = 'Error';
      }
    } else {
      expression += value;
    }

    updateDisplay();
  });
});

updateDisplay();
