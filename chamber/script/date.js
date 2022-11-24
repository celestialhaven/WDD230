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

//Using local storage, display the amount of time in days (rounded to a whole number) between user visits to this page by the user's agent (browser). You may elect to display this information where you deem fit on the page.
//localStorage.clear() //=> to reset local storage
if (localStorage.hasOwnProperty("firstVisit") == false) {
    localStorage.setItem("firstVisit", d.getTime());
}
localStorage.setItem("date", d.getTime());

let difference = parseInt(localStorage.getItem("current-visit")) - parseInt(localStorage.getItem("firstVisit"))

if (difference < 30000) {
    document.getElementById("date p").innerHTML = fulldateUK + '<br><p>Welcome! This is your first visit</p>'
} else {

if (43200000 < difference &&  difference < 86400000) {
    document.getElementById("date p").innerHTML = fulldateUK + '<br><p>Welcome Back!</p>'
}

if (86400000 < difference) {
    days = Math.round(difference/86400000)
    document.getElementById("date p").innerHTML = fulldateUK + `<br><p>Welcome Back! It's been ${days} days since your last visit.</p>`
}
}