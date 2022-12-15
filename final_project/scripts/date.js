//Let's get the date first
let d = new Date()
//format the date into a UK format date
let fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
    //timeStyle: 'long'
}).format(d);
document.getElementById("date").innerHTML = `Order date: ${fulldateUK}`