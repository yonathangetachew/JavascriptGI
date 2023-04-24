alert("Welcome to Calculator!");
let num1 = prompt("Enter your first value");
let Operations = prompt("Choose your operator (either +, -, * or /)");
let num2 = prompt("Enter your second value");

function add(number1,number2){
    return Number(number1) + Number(number2);
}
function subtract(number1,number2){
    return Number(number1) - Number(number2);
}
function multiply(number1,number2){
    return Number(number1) * Number(number2);
}
function divide(number1,number2){
    return Number(number1) / Number(number2);
}

function calculate(number1,number2,Operations){
    if (Operations == "+"){
        return add(number1,number2);

    } else if (Operations == "-"){
        return subtract(number1,number2);

    } else if (Operations == "*"){
        return multiply(number1,number2);

    } else if (Operations == "/"){
        return divide(number1,number2);
    } else {
        return "ERROR: Make Sure to Enter Only Numbers and the accepted Operators";
    }
}
console.log(num1 + " " + Operations + " " + num2 + " = " + calculate(num1,num2,Operations));
document.write(num1 + " " + Operations + " " + num2 + " = " + calculate(num1,num2,Operations));