// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function. 

// In the function block for adding a chapter, make sure the input is not blank and if not, do the following:
button.addEventListener('click', function() {
    if (input.value === '') {
        console.log('Please input the chapter');
    } else {
        let newChap = input.value

        // create an li element
        let elementLi = document.createElement('li');

        // create a delete button
        let deleteBtn = document.createElement('button');

        // create a textSpan
        let spanText = document.createElement('span')
        
        // append the li element with the delete button
        elementLi.appendChild(spanText);

        // populate the span with input value
        spanText.textContent = newChap;

        // append the li element with the delete button
        elementLi.appendChild(deleteBtn)

        // populate the button textContent with an ❌
        deleteBtn.textContent = "❌";

        list.appendChild(elementLi);

        // add an event listener to the delete button that removes the li element when clicked
        deleteBtn.addEventListener('click', function () {
            list.removeChild(elementLi);
        })
    }
    // send the focus to the input element
    input.focus();
})
