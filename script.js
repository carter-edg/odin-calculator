let leftNum = "Calculon 5000";
let rightNum;
let operator;

function add(a, b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(left, operator, right){
    if (operator === "add"){return add(left,right);}
    if (operator === "subtract"){return subtract(left,right);}
    if (operator === "multiply"){return multiply(left,right);}
    if (operator === "divide"){return divide(left,right);}
    else{return NaN;}
}