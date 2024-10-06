//Write a program that checks if a number is even or odd.

number = 2; // Try different values
if (number % 2 == 0) {
  console.log("odd");
} else {
  console.log("even");
}

// checking temperature

let temperature = 32;
if (temperature < 30) {
  console.log("normal");
} else {
  console.log("its hot");
}
// //3. Grade Calculator
// Write a program that assigns a letter grade based on a score:

// 90 and above: A
// 80 to 89: B
// 70 to 79: C
// 60 to 69: D
// Below 60: F
// javascript
// Copy code
let score = 75;
if (score >= 90) {
  ("A");
} else if (score >= 80) {
  console.log("B");
} else if (score > 70) {
  ("C");
} else if (score > 60) {
  ("D");
} else if (score < 60) {
  ("F");
}

// Simple Calculator using switch
// Write a program that performs a basic arithmetic operation (+, -, *, /) based on user input using a switch statement.

let operator = "/"; // Try '+', '-', '*', '/'
let num1 = 10;
let num2 = 5;

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
}

// Age Verification
// Write a program that checks a person's age and prints whether they can:

// Drive (16+)
// Vote (18+)
// Drink (21+)

let age = 19;

if (age > 21) {
  console.log("drink ,drive,vote");
} else if (21 < age > 18) {
  console.log(" drink ,drive");
} else if (age > 16) {
  console.log("drive ");
}
