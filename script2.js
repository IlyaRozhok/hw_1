let a = Number(prompt ("First number"));
let b = Number(prompt ("Second number"));
function calculate (a, b) {
    console.log("Result of addition is " + (a + b));
    console.log("Result of subtraction is " + (a - b));
    console.log("Result of multiplication is " + (a * b));
    console.log("Result of division is " + (a / b));
}

calculate(a, b);