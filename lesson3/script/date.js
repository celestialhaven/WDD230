// let daynames = [
//     "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
// ];
// let months = [
//     "January","Febuary","March","April","May","June","July","August","September","October","November","December",
// ];

// let d = new Date ();
// let dayName = daynames[d.getDay()];
// let monthName = months[d.getMonth()];
// let hours = d.getHours();
// let minutes = d.getMinutes();
// let seconds = d.getSeconds();

// let fulldate = `${dayName}, ${monthName} ${d.getDate()}, ${d.getFullYear()}; ${hours}:${minutes}:${seconds}`

// document.getElementById("currentdate").textContent = fulldate;

//********************************** */

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    document.getElementById("currentdate2").textContent = new Date().toLocaleDateString("en-us", options);
} catch (e) {alert(Error);
}