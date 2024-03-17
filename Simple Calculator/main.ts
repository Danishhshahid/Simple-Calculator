import { Console } from "console";
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your first Number", type: "number", name: "firstNumber" },
  {
    message: "Enter your second number",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "Select one of these operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "multiplication", "Division"],
  },
]);
console.log(answer);

//Conditional statement:
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Enter a valid operator or number");
}
