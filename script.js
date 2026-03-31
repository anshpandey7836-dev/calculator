let firstNumber = document.getElementById("first-number");
let operator = document.getElementById("operator");
let secondNumber = document.getElementById("second-number");
let result = document.getElementById("result");

let printFirstNumber = true;
let selectedOpeator = null;

function addNumber(num) {
    if(printFirstNumber){
        if(num === "." && firstNumber.value.includes(".")) return;
        firstNumber.value +=  num;
    } else {
        if(num === "." && secondNumber.value.includes(".")) return;
        secondNumber.value += num;
    }
}

function addOperator(op) {
    selectedOpeator = op;
    printFirstNumber = false;
    operator.value = op;
}

function allclear(){
    firstNumber.value = "";
    operator.value = "";
    secondNumber.value = "";
    result.value = "";

    printFirstNumber = true;
    selectedOpeator = null;
}

function clearOne(){
    if(printFirstNumber){
        firstNumber.value = firstNumber.value.slice(0, -1);
    } else {
        secondNumber.value = secondNumber.value.slice(0, -1);
    }
}

function calculate(){

    if(firstNumber.value===""  || secondNumber.value===""  || operator.value==="" ){
        result.value = "Invalid Operator or Number";
        return;
    }

    let f = (Number)(firstNumber.value);
    let s = (Number)(secondNumber.value);

    switch(selectedOpeator){
        case "+": result.value = f + s; break;
        case "-": result.value = f - s; break;
        case "*":  result.value = f * s; break;
        case "/": result.value = (s==0) ? "can't divide by zero" : (f/s); break;
        case "%":  result.value = f % s; break;
        case "^":  result.value = f**s;  break;
    }
}


function changeField(field) {
    if(field === '1'){
        printFirstNumber = true;
    } else {
        printFirstNumber = false;
    }
}

function sign(){
    if(printFirstNumber){
        firstNumber.value = "-" + firstNumber.value;
    } else {
        secondNumber.value = "-" + secondNumber.value;
    }
}
