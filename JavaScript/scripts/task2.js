/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let person = "Jones Mabala";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = person;

// Step 3: declare and instantiate a variable to hold the current year
let today = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.getElementById("year").innerHTML = today

// Step 5: declare and instantiate a variable to hold the name of your picture
let myImage = '../images/myPhoto.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#mainImage').src = myImage;



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favorite = ['bicol express', 'bulad', 'ginamos']

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favorite;

// Step 3: declare and instantiate a variable to hold another favorite food
let favorite2 = ['canton', 'egg', 'tinapa']

// Step 4: add the variable holding another favorite food to the favorite food array
favorite = favorite.concat(favorite2)

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favorite;

// Step 6: remove the first element in the favorite foods array
favorite.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favorite;

// Step 8: remove the last element in the favorite foods array
favorite.pop()

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favorite;