let leftNum  = "";
let rightNum = "";
let operator = "";

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

const screen = document.querySelector("#screen");

let numpadButtons = [...document.querySelectorAll("#numpad button")];
let operatorButtons = [...document.querySelectorAll("#operators button")];
numpadButtons.forEach((numpadButton)=>{
    numpadButton.addEventListener("click", (event)=>{
        numpadButtonClicked(numpadButton.textContent);
    });
});

operatorButtons.forEach((operatorButton)=>{
    operatorButton.addEventListener("click", (event)=>{
        operatorButtonClicked(operatorButton.textContent);
    });
});

function updateDisplay(){
    screen.textContent = leftNum + operator + rightNum;
}

function numpadButtonClicked(value){
    console.log(value);
    if (operator === ""){
        leftNum+=value;//held as string
    }else{
        rightNum+=value;//held as string
    }
    updateDisplay();
}

function operatorButtonClicked(value){
    console.log(value);
}