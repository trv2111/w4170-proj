document.addEventListener("DOMContentLoaded", function () {
    let time = 30;
    let intervalId;
    let timeoutCalled = false;

    function updateClock() {
        document.getElementById("clock").textContent = `0:${time < 10 ? '0' + time : time}`;
    }

    function startCountdown() {
        updateClock();
        document.getElementById("timeout-btn").classList.remove("d-none");
        document.getElementById("timeout-btn").disabled = false;
        intervalId = setInterval(() => {
            time--;
            updateClock();

            if (time <= 0 && !timeoutCalled) {
                clearInterval(intervalId);
                document.getElementById("rewind-btn").classList.remove("d-none");
                document.getElementById("headline").textContent = "You waited too long!";
                document.getElementById("scenario-text").textContent = "You didn’t call timeout. The game ended.";
                document.getElementById("timeout-btn").classList.add("d-none");
            }
        }, 1000);
    }

    window.callTimeout = function () {
        timeoutCalled = true;
        clearInterval(intervalId);
    
        // Store the time the timeout was called
        const timeText = document.getElementById("clock").textContent;
    
        // Hide timeout button
        document.getElementById("timeout-btn").classList.add("d-none");
    
        // Update message using real time
        document.getElementById("headline").textContent = `You called timeout at ${timeText}.`;
        document.getElementById("scenario-text").innerText =
            "Now the other team must run a play. If they don’t convert, you’ll get another chance.";
        // Insert player image
        const imgContainer = document.createElement("div");
        imgContainer.className = "mt-4";
        imgContainer.innerHTML = `
            <img src="/static/images/players_with_space.png" alt="Players" class="img-fluid mt-3" style="max-width: 300px;">
        `;
        document.querySelector(".timeouts-section").appendChild(imgContainer);

    
        // Show Next button
        const nextBtn = document.createElement("button");
        nextBtn.id = "next-btn";
        nextBtn.className = "btn btn-primary mt-3";
        nextBtn.innerText = "Next";
        nextBtn.onclick = () => goToNextSequence(timeText);
        document.getElementById("button-group").appendChild(nextBtn);
    };

    function goToNextSequence(calledTime) {
        // Update the headline and scenario text with actual clock time
        document.getElementById("headline").textContent =
            "They go for it, but they don’t convert.";
    
        document.getElementById("scenario-text").innerHTML =
            `You take over with ${calledTime} left and a shot to win the game.<br><br>` +
            `<strong>That timeout gave your team a chance.</strong>`;
    
        // Remove the "Next" button
        document.getElementById("next-btn").remove();
    
        // Create image container and insert player + trophy images
        const imgContainer = document.createElement("div");
        imgContainer.className = "mt-4";
    
        imgContainer.innerHTML = `
            <img src="/static/images/trophy.png" alt="Trophy" class="img-fluid mt-3" style="max-width: 150px;">
        `;
    
        document.querySelector(".timeouts-section").appendChild(imgContainer);

        // Add final Next button
        const finalNext = document.createElement("a");
        finalNext.href = "/learn/timeouts/final";
        finalNext.className = "btn btn-primary mt-4";
        finalNext.innerText = "Next";
        document.getElementById("button-group").appendChild(finalNext);
    }
    
    

    startCountdown();
});
