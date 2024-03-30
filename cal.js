#! /usr/bin/env node
//this is the only peice of code that we need to publish our code
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select a operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["add", "sub", "mul", "div"],
    },
]);
//conditional statement
if (answer.operator === "add") {
    console.log("The answer is", answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "sub") {
    console.log("The answer is", answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "mul") {
    console.log("The answer is", answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "div") {
    console.log("The answer is", answer.firstnumber / answer.secondnumber);
}
else {
    "select valid operator";
}
;
