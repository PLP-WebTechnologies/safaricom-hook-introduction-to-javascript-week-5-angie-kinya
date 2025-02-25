// Variables and Data Types
let girl = "Astralea Lune";
let age = 25;
let isStudent = true;
let hobbies = ["coding", "hiking", "reading"];
let person = {
    firstName: "Astralea",
    lastName: "Lune",
    age: 25,
    isStudent: true
};

console.log(`Name: ${girl} (Type: ${typeof girl})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators
function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operation!";
    }
}

function runCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter a valid number.");
    } else {
        let result = calculate(num1, num2, operation);
        if (result !== null) {
            alert(`Result: ${result}`);
        } else {
            alert("Invalid operation! Please choose +, -, *, or /.");
        }
    }
}

// Functions
function greetUser(girl) {
    return `Hello ${girl}! Welcome to the JavaScript Assignment.`;
}

document.getElementById("greeting").innerHTML = greetUser("Astralea Lune");

// Conditional Statements
let userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
    document.getElementById("voting-eligibility").innerHTML = "You are eligible to vote!";
} else {
    document.getElementById("voting-eligibility").innerHTML = "You are not eligible to vote!";
}

// Loops
let numberList = document.getElementById("numbers");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Selecting and Modifying HTML elements
document.querySelector("h1").textContent = "JavaScript in Action!";
let dynamicContent = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContent.appendChild(newParagraph);