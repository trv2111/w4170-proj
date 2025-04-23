window.onload = function () {
    const box = document.getElementById("score-info-box");
    const title = box.querySelector("h3");
    const content = box.querySelector("p");

    document.getElementById("score1").onclick = () => {
        title.innerText = "Down 4, 6:00 left, 4th & 2 on Opp 45";
        content.innerText = "This is a borderline decision. You’re losing, so aggression makes sense. Going for it shows trust in your offense to keep the drive alive.";
    };

    document.getElementById("score2").onclick = () => {
        title.innerText = "Winning 15-12, 7:45 left, 4th & 7";
        content.innerText = "You're ahead and facing a long 4th down. Punting is the safer call here to pin them deep and force them to drive the field.";
    };

    document.getElementById("score3").onclick = () => {
        title.innerText = "Tied or trailing slightly with time left";
        content.innerText = "If the scoreboard reflects a tight game with decent field position, the choice depends on your confidence in defense. Risk vs. reward is key.";
    };
};
