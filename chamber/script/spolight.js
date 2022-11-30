const requestURL = 'https://raw.githubusercontent.com/celestialhaven/wdd230/master/chamber/JSON/data.json';
const containers = document.querySelector(".spotlight-container");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

  function displayCompanies(company) {
    let card = document.querySelector(".spotlightOne");
    let logo = document.querySelector(".business-logo");
    let companyName = document.querySelector(".business-name");
    let phoneNumber = document.querySelector(".business-phone");
    let website = document.querySelector(".business-website");
    let membershipLevel = document.querySelector(".business-membership");
    

    logo.setAttribute('src', "images/" + company.logo);
    logo.setAttribute('alt', `${company.name}`);

    companyName.innerHTML = `${company.name}`;
    phoneNumber.innerHTML = company.phone;
    website.innerHTML = `${company.url}`;
    membershipLevel.innerHTML = company.membershipLevel;
    logo.innerHTML = 

    containers.appendChild(card);
}