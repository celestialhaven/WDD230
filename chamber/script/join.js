//input validation Business Position Title
function validate() {
    var exp = /^[A-Za-z0-9\s-]+$/
    var business_post = document.getElementById('businessPos').value
    var result = exp.test(business_post)

    if (result == false || business_post.length < 7) {
        document.getElementById('bussinessError').style.display = 'block'
        return false
    } else {
        document.getElementById('bussinessError').style.display = 'none'
    }
}

//A hidden field that contains the current date and time that the form was loaded by the user.
document.getElementById("hidden-current-date").value = fulldateUK
console.log("working")
var hours = d.getHours()
var mins = d.getMinutes()
var seconds = d.getSeconds()
if (hours < 10) {
    hours = "0" + hours;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
document.getElementById("hidden-current-time").value = hours + ":" + mins + ":" + seconds 