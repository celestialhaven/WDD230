const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json'
const fruit1 = document.getElementById('fruit1')
const fruit2 = document.getElementById('fruit2')
const fruit3 = document.getElementById('fruit3')

let globalData = undefined


fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      globalData = json
      json.forEach(element => {
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')
        let option3 = document.createElement('option')
        option1.value = element.name
        option1.text = element.name
        option2.value = element.name
        option2.text = element.name
        option3.value = element.name
        option3.text = element.name
        fruit1.appendChild(option1)
        fruit2.appendChild(option2)
        fruit3.appendChild(option3)
      });
    });

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  let first_name = document.getElementById('fname').value
  document.getElementById('modal-name').textContent = `Your name: ${first_name}`

  let modal_email = document.getElementById('email').value
  document.getElementById('modal-email').textContent = `Email: ${modal_email}`

  let modal_phone = document.getElementById('phone').value
  document.getElementById('modal-phone').textContent = `Phone number: ${modal_phone}`
  
  let modal_fruit1 = document.getElementById('fruit1').value
  document.getElementById('modal-fruit1').textContent = `Fruit number 3: ${modal_fruit1}`

  let modal_fruit2 = document.getElementById('fruit2').value
  document.getElementById('modal-fruit2').textContent = `Fruit number 3: ${modal_fruit2}`

  let modal_fruit3 = document.getElementById('fruit3').value
  document.getElementById('modal-fruit3').textContent = `Fruit number 3: ${modal_fruit3}`

  let modal_instructions = document.getElementById('instructions').value
  document.getElementById('modal-instructions').textContent = `Your instructions: ${modal_instructions}`

  let fruit1_carbohydrades = ""
  let fruit2_carbohydrades = ""
  let fruit3_carbohydrades = ""

  globalData.forEach((data) => {
    if(data.name === modal_fruit1) {
      fruit1_carbohydrades = data.nutritions.carbohydrates
    }
    if(data.name === modal_fruit2) {
      fruit2_carbohydrades = data.nutritions.carbohydrates
    }else {
      fruit3_carbohydrades = data.nutritions.carbohydrates
    }
  })
  
  let modal_carbohydrades = `${fruit1_carbohydrades + fruit2_carbohydrades + fruit3_carbohydrades}`
  document.getElementById('modal-carbohydrates').textContent = `Total Carbohydrates: ${modal_carbohydrades}`

  let fruit1_protein = ""
  let fruit2_protein = ""
  let fruit3_protein = ""

  globalData.forEach((data) => {
    if(data.name === modal_fruit1) {
      fruit1_protein = data.nutritions.protein
    }
    if(data.name === modal_fruit2) {
      fruit2_protein = data.nutritions.protein
    }else {
      fruit3_protein = data.nutritions.protein
    }
  })
  
  let modal_protein = `${fruit1_protein + fruit2_protein + fruit3_protein}`
  document.getElementById('modal-protein').textContent = `Total Protein: ${modal_protein}`

  let fruit1_fat = ""
  let fruit2_fat = ""
  let fruit3_fat = ""

  globalData.forEach((data) => {
    if(data.name === modal_fruit1) {
      fruit1_fat = data.nutritions.fat
    }
    if(data.name === modal_fruit2) {
      fruit2_fat = data.nutritions.fat
    }else {
      fruit3_fat = data.nutritions.fat
    }
  })
  
  let modal_fat = `${fruit1_fat + fruit2_fat + fruit3_fat}`
  document.getElementById('modal-fat').textContent = `Total Fat: ${parseFloat(modal_fat).toFixed(2)}`

  let fruit1_sugar = ""
  let fruit2_sugar = ""
  let fruit3_sugar = ""

  globalData.forEach((data) => {
    if(data.name === modal_fruit1) {
      fruit1_sugar = data.nutritions.sugar
    }
    if(data.name === modal_fruit2) {
      fruit2_sugar = data.nutritions.sugar
    }else {
      fruit3_sugar = data.nutritions.sugar
    }
  })
  
  let modal_sugar = `${fruit1_sugar + fruit2_sugar + fruit3_sugar}`
  document.getElementById('modal-sugar').textContent = `Total Sugar: ${parseFloat(modal_sugar).toFixed(2)}`

  let fruit1_calories = ""
  let fruit2_calories = ""
  let fruit3_calories = ""

  globalData.forEach((data) => {
    if(data.name === modal_fruit1) {
      fruit1_calories = data.nutritions.calories
    }
    if(data.name === modal_fruit2) {
      fruit2_calories = data.nutritions.calories
    }else {
      fruit3_calories = data.nutritions.calories
    }
  })
  
  let modal_calories = `${fruit1_calories + fruit2_calories + fruit3_calories}`
  document.getElementById('modal-calories').textContent = `Total calories: ${parseFloat(modal_calories).toFixed(2)}`

  

  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}