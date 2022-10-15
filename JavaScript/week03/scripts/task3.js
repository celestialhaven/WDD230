/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// function add(number1, number2) {}

// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1,number2) {
    return parseFloat(number1) + parseFloat(number2)
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
    let addend1 = document.querySelector('#addend1').value
    let addend2 = document.querySelector('#addend2').value
    let add = add(addend1, addend2)
}
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
    let addend1 = document.querySelector('#addend1').value
    let addend2 = document.querySelector('#addend2').value
    let add = add(addend1, addend2)
    document.querySelector('#sum').value = add
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
function addNumbers() {
    let addend1 = document.querySelector('#addend1').value
    let addend2 = document.querySelector('#addend2').value
    let result = add(addend1, addend2)
    document.querySelector('#sum').value = result
}
document.querySelector('#addNumbers').addEventListener("click", addNumbers)

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function sub(number1, number2) {
    return parseFloat(number1) - parseFloat(number2)
}
function subtractNumbers() {
    let minuend = document.querySelector('#minuend').value
    let subtrahend = document.querySelector('#subtrahend').value
    let result = sub(minuend, subtrahend)
    document.querySelector('#difference').value = result
}
document.querySelector('#subtractNumbers').addEventListener("click", subtractNumbers)
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2) {
    return parseFloat(number1) * parseFloat(number2)
}
function multiplyNumbers() {
    let factor1 = document.querySelector('#factor1').value
    let factor2 = document.querySelector('#factor2').value
    let result = multiply(factor1, factor2)
    document.querySelector('#product').value = result
}
document.querySelector('#multiplyNumbers').addEventListener("click", multiplyNumbers)
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function division(number1, number2) {
    return parseFloat(number1) / parseFloat(number2)
}
function divideNumbers() {
    let dividend = document.querySelector('#dividend').value
    let divisor = document.querySelector('#divisor').value
    let result = division(dividend, divisor)
    document.querySelector('#quotient').value = result
}
document.querySelector('#divideNumbers').addEventListener("click", divideNumbers)
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let today = new Date();
// Step 2: Declare a variable to hold the current year
let year = new Date().getFullYear()
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
let current_date = today.getFullYear()
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').innerHTML = current_date

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numHolder = Array.from({length:25}, (_, i) => i + 1)
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = numHolder
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddsResult = numHolder.filter(i => i % 2 == 1);
document.querySelector('#odds').innerHTML = oddsResult
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evensResult = numHolder.filter(i => i % 2 == 0);
document.querySelector('#evens').innerHTML = evensResult
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumResult = numHolder.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
document.querySelector('#sumOfArray').innerHTML = sumResult
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const mulElement = numHolder.map(myFunction);
document.querySelector('#multiplied').innerHTML = mulElement
function myFunction(num) {
    return num * 2;
}
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const mulSum = mulElement.reduce((accumulator, value) => {
    return accumulator + value
}, 0);
document.querySelector('#sumOfMultiplied').innerHTML = mulSum