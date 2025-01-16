const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-ops]');
const equals = document.querySelector('[data-equal]');
const clear = document.querySelector('[data-clear]');
const backspce = document.querySelector('[data-bckspce]');

let num1 = '';
let num2 = '';
let oper = '';
let decimal = false;


function zero() {
    display.value = 0;
};

function add(num1, num2) {
    return Number(num1) + Number(num2);
};

function sub(num1, num2) {
    return Number(num1) - Number(num2);
};

function mult(num1, num2) {
    return Number(num1) * Number(num2);
};

function div(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return "ERROR";
    }
    return Number(num1) / Number(num2);
};



function operate(num1, oper, num2) {
    switch (oper) {
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return mult(num1, num2);
        case '/':
            return div(num1, num2);
        default:
            break;
    }
}

function setNumbers(num) {
    if (oper === '') {
        num1 += num;
    }
    else {
        num2 += num;
    }
}

function checkOper() {
    return !oper;
}

function setOper(operator) {
    if (num1 && !oper) {
        oper = operator === 'x' ? '*' : operator;
        display.value += `${operator}`
    }
    decimal = false;
}
function check() {
    if (oper && num1 && num2) {
        return true;
    }
    return false;
}

function checkDecimal() {
    if (!decimal && !op) {
        num1 += '.';
        display.value = num1;
        decimal = true;
    }
    else if (!decimal) {
        num2 += '.';
        display.value = num2;
        decimal = true;
    }
}

function backspace() {
    if (!oper && num1) {
        display.value = display.value.slice(0, -1);
        num1 = num1.slice(0, -1);
    }
    else if (oper && !num2) {
        display.value = display.value.slice(0, -1);
        oper = "";
    }
    else if (oper && num2) {
        display.value = display.value.slice(0, -1);
        num2 = num2.slice(0, -1);
    }
}

clear.addEventListener('click', () => {
    zero();
    num1 = '';
    num2 = '';
    oper = '';
    decimal = false;
});

backspce.addEventListener('click', () => {
    backspace();
});

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.value == 0) {
            display.value = '';
        }
        if (display.value == 0 && !oper) {
            display.value = '';
        }
        display.value += button.textContent;
        setNumbers(button.textContent);
    });
});

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (checkOper()) {
            setOper(button.textContent);
            display.value = 0;
        }
    });
});

equals.addEventListener('click', () => {
    if (check()) {
        display.value = operate(num1, oper, num2);
        num1 = display.value;
        num2 = '';
        oper = '';
    }
});

window.addEventListener('load', () => {
    zero();
})


