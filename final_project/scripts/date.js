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
} catch (e) { console.log(e)
}