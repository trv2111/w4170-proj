document.addEventListener("DOMContentLoaded", function () {
    let time = 30;
    let intervalId;
    let timeoutCalled = false;
    let timeoutsRemaining = 1;

    const nextPlaceholder = document.getElementById("next-placeholder");

    function updateClock() {
        document.getElementById("clock").textContent = `0:${time < 10 ? '0' + time : time}`;
    }

    function updateTimeoutDots(remaining) {
        const dots = document.querySelectorAll('.timeout-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index < remaining);
        });
    }

    updateTimeoutDots(timeoutsRemaining);

    function startCountdown() {
        updateClock();
        document.getElementById("clock").classList.add("tickPulse");

        const timeoutBtn = document.getElementById("timeout-btn");
        timeoutBtn.classList.remove("d-none");
        timeoutBtn.disabled = false;

        intervalId = setInterval(() => {
            time--;
            updateClock();

            if (time <= 0 && !timeoutCalled) {
                clearInterval(intervalId);
                document.getElementById("rewind-btn").classList.remove("d-none");
                document.getElementById("headline").textContent = "You waited too long!";
                document.getElementById("scenario-text").textContent = "You didn’t call timeout. The game ended.";
                timeoutBtn.classList.add("d-none");
            }
        }, 1000);
    }

    window.callTimeout = function () {
        timeoutCalled = true;
        clearInterval(intervalId);
        document.getElementById("clock").classList.remove("tickPulse");

        const timeText = document.getElementById("clock").textContent;
        document.getElementById("timeout-btn").classList.add("d-none");

        // Decrement timeout indicator
        if (timeoutsRemaining > 0) {
            timeoutsRemaining--;
            updateTimeoutDots(timeoutsRemaining);
        }

        document.getElementById("headline").textContent = `You called timeout at ${timeText}.`;
        document.getElementById("scenario-text").innerText =
            "Now the other team must run a play. If they don’t convert, you’ll get another chance.";

        const imgContainer = document.createElement("div");
        imgContainer.className = "mt-4";
        document.getElementById("scenario-text").insertAdjacentHTML('afterend', `
            <div class="text-center mt-4">
                <img src="/static/images/players_with_space.png" alt="Players" class="img-fluid mt-3" style="max-width: 300px;">
            </div>
        `);
        
        nextPlaceholder.parentElement.insertBefore(imgContainer, nextPlaceholder);

        nextPlaceholder.innerHTML = `
        <a href="#" id="next-seq">
            <button class="bottom-buttons next-button-fixed">Next</button>
        </a>
        `;
        

        document.getElementById("next-seq").onclick = () => goToNextSequence(timeText);
    };

    function goToNextSequence(calledTime) {
        document.getElementById("headline").textContent = "They Go for It… But Don’t Convert.";
        document.getElementById("scenario-text").innerHTML =
            `You take over with <strong>${calledTime}</strong> left on the clock.<br><br>` +
            "<strong>Your timeout gave your team a chance to win.</strong>";

            nextPlaceholder.innerHTML = `
            <a href="/learn/timeouts/final" class="bottom-buttons next-button-fixed">Next</a>
            `;
            
    }

    startCountdown();
});
