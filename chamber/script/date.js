try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    document.getElementById("date").textContent = new Date().toLocaleDateString("en-us", options);
} catch (e) {alert(Error);
}