#!/usr /bin/env node
import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        name: "firstNUMBER",
        type: "number",
        message: "Enter first number"
    },
    {
        name: "secondNUMBER",
        type: "number",
        message: "Enter second number"
    },
    {
        name: "operator",
        type: "list",
        message: "select one opertao to perform action",
        choices: ["Addition", "substraction", "Multiplication", "Division"]
    }
]);
console.log(ans);
if (ans.operator === "Addition") {
    console.log(ans.firstNUMBER + ans.secondNUMBER);
}
else if (ans.operator === "substraction") {
    console.log(ans.firstNUMBER - ans.secondNUMBER);
}
else if (ans.operator === "Multiplication") {
    console.log(ans.firstNUMBER * ans.secondNUMBER);
}
else if (ans.operator === "Division") {
    console.log(ans.firstNUMBER / ans.secondNUMBER);
}
else {
    console.log("you may succed!");
}
