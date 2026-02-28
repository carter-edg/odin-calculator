let leftNum  = "";
let rightNum = "";
let operator = "";
let calculatedNumber = false;
//add two numbers
function add(a, b){
    return a + b;
}

//subtract two numbers
function subtract(a,b){
    return a-b;
}

//multiply two numbers
function multiply(a,b){
    return a*b;
}

//divide two numbers
function divide(a,b){
    return a/b;
}

//figure out which operation to perform given the operator, left number, and right number.
function operate(left, operator, right){
    if (operator === "+"){return add(left,right);}
    if (operator === "-"){return subtract(left,right);}
    if (operator === "*"){return multiply(left,right);}
    if (operator === "/"){return divide(left,right);}
    else{return "OOPS!!!";}//should never happen.
}

//grabs screen item for display updates.
const screen = document.querySelector("#screen");

//gets all buttons and adds appropriate events to them.
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

//updates the screen.
function updateDisplay(){
    screen.textContent = leftNum + operator + rightNum;
}

//event when a button in the numpad is clicked. 
function numpadButtonClicked(value){
    if (calculatedNumber === true){ //overwrite answer if last input was to calculate answer.
        leftNum = "";
    }
    calculatedNumber = false; //
    console.log(value);
    if (operator === ""){//determine whether editing left number or right number
        if (Number.isNaN(Number(leftNum))){leftNum = "";updateDisplay();}//clears error if there was
        leftNum+=value;//held as string
    }else{
        rightNum+=value;//held as string
    }
    updateDisplay();
}

//event when a button in the operators section is clicked.
function operatorButtonClicked(value){
    calculatedNumber = false;
    console.log(value);
    if (value === "="){
        calculatedNumber = true;
        calculate();
    }else if (value === "c"){
        leftNum = operator = rightNum = "";
        updateDisplay();
    }else{ //+,-,*,/ operators
        if (operator !== "" && rightNum !== ""){//don't evaluate more than one pair of numbers
            calculate();
        }
        operator = value;
        updateDisplay();
    }
}

//performs the = operator, clears display.
function calculate(){
    if (rightNum === ""){leftNum = "OOPS!!!"; operator = ""; updateDisplay(); return;}//error check
    //leftNum and rightNum are stored as strings.
    let a = Number(leftNum);
    let b = Number(rightNum);
    console.log("evaluating "+a + operator + b );
    if (b === 0 && operator === "/"){leftNum = "Nice try."; operator = rightNum = ""; updateDisplay(); return;}//division by 0
    let result = operate(a, operator, b);
    leftNum = String(+(result.toFixed(5)));
    //clear non-result, update display
    operator = rightNum = "";
    updateDisplay();
}