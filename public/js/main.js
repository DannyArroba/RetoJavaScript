document.addEventListener('DOMContentLoaded', function () {
  const percentageInput = document.getElementById('percentage');
  const numberInput = document.getElementById('number');
  const calculateButton = document.getElementById('calculate');
  const resultElement = document.getElementById('result');

  calculateButton.addEventListener('click', () => {
    const percentage = parseFloat(percentageInput.value);
    const number = parseFloat(numberInput.value);

    if (isNaN(percentage) || isNaN(number)) {
      resultElement.textContent = 'Por favor, ingresa números válidos';
    } else {
      const result = (percentage / 100) * number;
      resultElement.textContent = `Resultado: ${result.toFixed(2)}`;
    }
  });
});