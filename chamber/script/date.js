//Let's get the date first
let d = new Date()
//format the date into a UK format date
let fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full",
}).format(d);
document.getElementById("date").innerHTML = fulldateUK

let numVisits = Number(window.localStorage.getItem("numberOfVisits"));
window.localStorage.setItem("numberOfVisits", numVisits+1)

if (numVisits === 0) {
    window.localStorage.setItem("firstVisit", new Date())
}