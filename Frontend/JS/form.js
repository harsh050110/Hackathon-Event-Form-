
document.getElementById("basicForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedEvent = document.querySelector('input[name="event"]:checked');
    const selectedYear = document.querySelector('input[name="year"]:checked');

    if (!selectedEvent || !selectedYear) {
        alert("Please fill all required fields");
        return;
    }

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        college: document.getElementById("college").value,
        phone: document.getElementById("phone").value,
        year: selectedYear.value,
        eventType: selectedEvent.value
    };


    localStorage.setItem("registrationData", JSON.stringify(data));

    if (selectedEvent.value === "TECH") {
        window.location.href = "Tech.html";
    }
    if (selectedEvent.value === "CULTURAL") {
        window.location.href = "Cultural.html";
    }
    if (selectedEvent.value === "GAME") {
        window.location.href = "Game.html";
    }
    if (selectedEvent.value === "DJ") {
        window.location.href = "Djnight.html";
    }
});
