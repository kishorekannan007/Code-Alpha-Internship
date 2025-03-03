// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate the expression
function calculate() {
    const display = document.getElementById('display');
    try {
        // Use the eval function to calculate the result
        display.value = eval(display.value);
    } catch (error) {
        // Handle any errors (e.g., invalid expressions)
        display.value = 'Error';
    }
}
