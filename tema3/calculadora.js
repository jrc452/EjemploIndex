const calculator = document.getElementById('calculator');
const screen = document.getElementById('screen');
const currentOperator = document.getElementById('currentOperator');

calculator.addEventListener('click', addNum);

let operation = [];

function addNum(e) {
    if (e.target.getAttribute('type') === 'button') {
        if (e.target.className != 'operation')
            screen.value += e.target.innerText;
        if (e.target.id === 'addition') {
            operation.push(screen.value);
            operation.push('+');
            calculator.reset();
        } else if (e.target.id === 'equals') {
            operation.push(screen.value);
            calculator.reset();
            const showResult = eval(operation.join(''));
            screen.value = showResult;
            screen.reset();
            operation = [];
        } else if (e.target.id === 'substract') {
            operation.push(screen.value);
            operation.push('-');
            calculator.reset();
        } else if (e.target.id === 'multiplication') {
            operation.push(screen.value);
            operation.push('*');
            calculator.reset();
        } else if (e.target.id === 'division') {
            operation.push(screen.value);
            operation.push('/');
            calculator.reset();
        } else if (e.target.id === 'squareRoot') {
            operation.push(screen.value * screen.value);
            calculator.reset();
            const showResult = eval(operation.join(''));
            screen.value = showResult;
            operation = [];
        } else if (e.target.id === 'modulo') {
            operation.push(screen.value);
            operation.push('/');
            calculator.reset();
        } else if (e.target.id === 'clear') {
            operation = [];
            calculator.reset();
        }
    }
}