// Get the elements from the DOM
const fahrenheitInput = document.getElementById('fahrenheit');
const convertBtn = document.getElementById('convertBtn');
const resultParagraph = document.getElementById('result');

// Function to convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
  return new Promise((resolve, reject) => {
    if (isNaN(fahrenheit)) {
      reject(new Error('Invalid temperature value'));
    } else {
      const celsius = ((fahrenheit - 32) * 5) / 9;
      resolve(celsius.toFixed(2));
    }
  });
}

// Event listener for the button click
convertBtn.addEventListener('click', async () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  try {
    const celsius = await convertToCelsius(fahrenheit);
    resultParagraph.textContent = `Celsius: ${celsius}`;
  } catch (error) {
    resultParagraph.textContent = error.message;
  }
});
