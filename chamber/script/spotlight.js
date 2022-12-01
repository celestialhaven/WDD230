const requestURL = 'https://raw.githubusercontent.com/celestialhaven/wdd230/master/chamber/JSON/data.json';
const containers = document.querySelector(".spotlight");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    let shown = 1;
    companies.forEach((data, index) => {
      if(shown <= 3 && data.membership === "Gold Membership") {
        shown += 1;
        displayCompanies(data)
      }
    })
  });

  function displayCompanies(company) {

    let outerDiv = document.createElement('div')
    outerDiv.setAttribute("class", "spotlightOne")

    let innerDiv1 = document.createElement('div')
    let h3 = document.createElement('h3')
    h3.innerHTML = company.name
    let img = document.createElement('img')
    img.setAttribute("src", company.logo)
    img.setAttribute("alt", company.name)
    img.setAttribute("class", "business-logo")
    img.setAttribute("width", "200")
    innerDiv1.appendChild(h3)
    innerDiv1.appendChild(img)


    let innerDiv2 = document.createElement('div')
    innerDiv2.setAttribute("class", "spotlightOne-p")
    let p1 = document.createElement("p")
    p1.innerHTML = company.email
    let p2 = document.createElement("p")
    p2.innerHTML = company.phone
    innerDiv2.appendChild(p1)
    innerDiv2.appendChild(p2)

    outerDiv.appendChild(innerDiv1)
    outerDiv.appendChild(innerDiv2)
  

    containers.appendChild(outerDiv);
}