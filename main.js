const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-ops]');
const equals = document.querySelector('[data-equal]');
const clear = document.querySelector('[data-clear]');
const backspace = document.querySelector('[data-bckspce]');


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



function operate(num1, op, num2) {

}

zero();