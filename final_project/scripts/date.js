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
    document.getElementById('date').textContent = new Date().toLocaleDateString("en-us", options);
    document.getElementById("currentdate2").textContent = new Date().toLocaleDateString("en-us", options);
} catch (e) {alert(Error);
}