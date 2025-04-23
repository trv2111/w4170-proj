document.addEventListener("DOMContentLoaded", function () {
    let time = 30;
    let intervalId;

    function updateClock() {
        document.getElementById("clock").textContent = `0:${time < 10 ? '0' + time : time}`;
    }

    function startCountdown() {
        updateClock();
        intervalId = setInterval(() => {
            time--;
            updateClock();

            if (time <= 0) {
                clearInterval(intervalId);
                document.getElementById("rewind-btn").classList.remove("d-none");
                document.getElementById("headline").textContent = "The clock hit zero.";
                document.getElementById("scenario-text").textContent =
                    "You had 1 timeout but never used it. Your team never got the ball back. Game over.";
            }
        }, 1000);
    }

    window.startNoTimeoutScenario = function () {
        // Hide the initial button
        document.getElementById("start-btn").classList.add("d-none");
        document.getElementById("skip-btn").classList.remove("d-none");

        // Show the timeout button (still disabled)
        const timeoutBtn = document.getElementById("timeout-btn");
        timeoutBtn.classList.remove("d-none");
        timeoutBtn.disabled = true;

        // Update the messaging
        document.getElementById("headline").textContent = "Watch What Happens When You Don’t Call Timeout";
        document.getElementById("scenario-text").textContent = "The other team can let the clock run out. Your timeout button is disabled.";

        startCountdown();
    };

    window.skipToEnd = function () {
        clearInterval(intervalId);
        time = 0;
        updateClock();
    
        document.getElementById("timeout-btn").classList.add("d-none");
        document.getElementById("skip-btn").classList.add("d-none");
        document.getElementById("rewind-btn").classList.remove("d-none");
    
        document.getElementById("headline").textContent = "The clock hit zero.";
        document.getElementById("scenario-text").textContent =
            "You had 1 timeout but never used it. Your team never got the ball back. Game over.";
    };
    
});
