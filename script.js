let displayValue = '';
function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}
function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}
function clearDisplay() {
  displayValue = '';
  updateDisplay();
}
