#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please guess a number between 1 to 10:",
        type: "number",
        name: "gNumber",
    }
]);
if (answer.gNumber === randomNumber) {
    console.log("congratulation! You guess the right number");
}
else {
    console.log("Please guess the right number");
}
