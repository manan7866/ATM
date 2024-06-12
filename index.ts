
import inquirer from "inquirer";

let myBalance = 12000;

let myPin = 9201;




let pinAnswer = await inquirer.prompt([
    {
    name: "q1",
    type : "number",
    message: "Enter your pin code",

}])

if(pinAnswer.q1 ===  myPin) {
    console.log("correct pin code")
    let operationAns = await inquirer.prompt([{
        name : "operation",
        message: "please select option",
        type : "list",
        choices: ["withdraw" ,"check Balance" ]

    }])
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt ([{
            name: "amount",
            message: "Enter Your Amount",
            type: "number"

        }])




    if (amountAns.amount > myBalance) {
        console.log("not enough Balance")}else {
          myBalance -= amountAns.amount
        console.log ("your remaining Balance is : " + myBalance)

    }
    } else if (operationAns.operation === "check Balance"){
        console.log("Your Balance is :" + myBalance)
    }
} else {
    console.log("incorrect pin code")
}
