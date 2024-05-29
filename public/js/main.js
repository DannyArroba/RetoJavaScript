document.addEventListener('DOMContentLoaded', () => {
  const getElement = id => document.getElementById(id);
  const percentageInput = getElement('percentage');
  const numberInput = getElement('number');
  const calculateButton = getElement('calculate');
  const resultElement = getElement('result');

  calculateButton.addEventListener('click', () => {
    const percentage = parseFloat(percentageInput.value);
    const number = parseFloat(numberInput.value);
    const result = (percentage / 100) * number;

    resultElement.textContent = isNaN(percentage) || isNaN(number)
      ? 'Por favor, ingrese números válidos'
      : `Resultado: ${Number.isInteger(result) ? result : result.toFixed(2)}`;
  });
});
