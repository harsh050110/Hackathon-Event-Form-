// js/main.js

// Utility: get stored data
function getData() {
    return JSON.parse(localStorage.getItem("registrationData")) || {};
}

// Utility: save data
function saveData(data) {
    localStorage.setItem("registrationData", JSON.stringify(data));
}

/* =========================
   TECH PAGE
========================= */
if (document.getElementById("techNext")) {
    document.getElementById("techNext").addEventListener("click", () => {

        const techEvent = document.querySelector('input[name="subEvent"]:checked');
        const teamSizeEl = document.querySelector('input[name="teamSize"]:checked');

        if (!techEvent || !teamSizeEl) {
            alert("Select tech event and team size");
            return;
        }

        const teamSize = teamSizeEl.value;
        let members = [];

        for (let i = 1; i <= teamSize; i++) {
            const val = document.getElementById("member" + i)?.value;
            if (!val) {
                alert("Fill all team member names");
                return;
            }
            members.push(val);
        }

        const data = getData();
        data.subEvent = techEvent.value;
        data.teamSize = teamSize;
        data.members = members;

        saveData(data);
        window.location.href = "Payment.html";
    });
}

/* =========================
   CULTURAL PAGE
========================= */
if (document.getElementById("culturalNext")) {
    document.getElementById("culturalNext").addEventListener("click", () => {

        const culturalEvent = document.querySelector('input[name="subEvent"]:checked');
        if (!culturalEvent) {
            alert("Select a cultural event");
            return;
        }

        const data = getData();
        data.subEvent = culturalEvent.value;

        saveData(data);
        window.location.href = "Payment.html";
    });
}

/* =========================
   GAME PAGE
========================= */
if (document.getElementById("gameNext")) {
    document.getElementById("gameNext").addEventListener("click", () => {

        const gameEvent = document.querySelector('input[name="subEvent"]:checked');
        if (!gameEvent) {
            alert("Select a game");
            return;
        }

        const data = getData();
        data.subEvent = gameEvent.value;

        saveData(data);
        window.location.href = "Payment.html";
    });
}



/* =========================
   PAYMENT PAGE (FINAL SUBMIT)
========================= */
if (document.getElementById("submitBtn")) {
    document.getElementById("submitBtn").addEventListener("click", () => {

        const paid = document.getElementById("paid").checked;
        const utr = document.getElementById("utr").value;

        if (paid && !utr) {
            alert("Please enter UTR number");
            return;
        }

        const data = getData();
        data.paymentStatus = paid ? "PAID" : "UNPAID";
        data.utrNumber = utr;

        fetch("http://localhost:8080/api/participants", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(() => {
            alert("Registration Successful 🎉");
            localStorage.clear();
            window.location.href = "../index.html";
        })
        .catch(() => alert("Server error"));
    });
}
