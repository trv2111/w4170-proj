document.addEventListener("DOMContentLoaded", function () {
    let time = 30;
    let intervalId;

    function updateClock() {
        document.getElementById("clock").textContent = `0:${time < 10 ? '0' + time : time}`;
    }

    function updateTimeoutDots(remaining) {
        const dots = document.querySelectorAll('.timeout-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index < remaining);
        });
    }

    updateTimeoutDots(1);  // show 1 timeout

    function startCountdown() {
        updateClock();
        intervalId = setInterval(() => {
            time--;
            updateClock();

            if (time <= 0) {
                clearInterval(intervalId);
                document.getElementById("clock").classList.remove("tickPulse");
                document.getElementById("rewind-btn").classList.remove("d-none");
                document.getElementById("headline").textContent = "The clock hit zero.";
                document.getElementById("scenario-text").innerHTML =
                    "You had 1 timeout but never used it. Your team never got the ball back. Game over." +
                    '<p class="rewind-note">Click <strong>Rewind Time</strong> below to go back and try calling your timeout.</p>';
            }
        }, 1000);
    }

    window.startNoTimeoutScenario = function () {
        document.getElementById("start-btn").classList.add("d-none");
        document.getElementById("skip-btn").classList.remove("d-none");

        const timeoutBtn = document.getElementById("timeout-btn");
        timeoutBtn.classList.remove("d-none");
        timeoutBtn.disabled = true;

        document.getElementById("headline").textContent = "Watch What Happens When You Don’t Call Timeout";
        document.getElementById("scenario-text").textContent = "The other team can let the clock run out. Your timeout button is disabled.";
        document.getElementById("clock").classList.add("tickPulse");

        startCountdown();
    };

    window.skipToEnd = function () {
        clearInterval(intervalId);
        document.getElementById("clock").classList.remove("tickPulse");
        time = 0;
        updateClock();

        document.getElementById("timeout-btn").classList.add("d-none");
        document.getElementById("skip-btn").classList.add("d-none");
        document.getElementById("rewind-btn").classList.remove("d-none");

        document.getElementById("headline").textContent = "The clock hit zero.";
        document.getElementById("scenario-text").innerHTML =
            "You had 1 timeout but never used it. Your team never got the ball back. Game over." +
            '<p class="rewind-note">Click <strong>Rewind Time</strong> below to go back and try calling your timeout.</p>';
    };
});
