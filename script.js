const display = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

function updateDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {

        const expression = display.value.replace(/x/g, '*');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Erro';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        switch (value) {
            case 'C':
                clearDisplay();
                break;
            case '=':
                calculate();
                break;
            default:
                updateDisplay(value);
                break;
        }
    });
});

document.addEventListener('keydown', event => {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        updateDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});