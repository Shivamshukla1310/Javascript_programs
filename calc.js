const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        case '//': result = num2 !== 0 ? Math.floor(num1 / num2) : "Cannot divide by zero"; break;
        case '**': result = num1 ** num2; break;
        case '%': result = num1 % num2; break;
        default: result = "Invalid operator";
    }
    console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
}

rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
        rl.question("Enter operator (+, -, *, /, //, **, %): ", (operator) => {
            calculate(parseFloat(num1), parseFloat(num2), operator);
            rl.close();
        });
    });
});
