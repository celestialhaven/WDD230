function expenseTracker() {
  let allName = document.getElementById("name").value;
  let allDate = document.getElementById("date").value;
  let allAmount = document.getElementById("amount").value;

  if (!allName && !allDate && !allAmount ) {
    alert('No input');
    return
  }

  let newTr = document.createElement("tr");
  let newTd1 = document.createElement("td");
  let newTd2 = document.createElement("td");
  let newTd3 = document.createElement("td");
  let newTd4 = document.createElement("button");

  newTd1.innerHTML = allName;
  newTd2.innerHTML = allDate;
  newTd3.innerHTML = allAmount;
  newTd4.innerHTML = "X";

  newTd4.addEventListener("click", (e) => {
    e.target.parentNode.remove();
    let test = document.getElementById('tableElement').childNodes
    if (!test.length) {
      let newTr = document.createElement("tr");
      let newTd1 = document.createElement("td");
      newTd1.setAttribute('colspan', '4');
      newTd1.textContent = 'No expense yet!';
      newTr.appendChild(newTd1);
      document.getElementById("tableElement").appendChild(newTr);
    }
  });

  newTr.appendChild(newTd1);
  newTr.appendChild(newTd2);
  newTr.appendChild(newTd3);
  newTr.appendChild(newTd4);

  let trNoExpense = document.getElementById('tableElement').childNodes
    if (trNoExpense[0].textContent.includes('No expense yet!')) {
      document.getElementById("tableElement").innerHTML = '';
    }

  document.getElementById("tableElement").appendChild(newTr);
}
