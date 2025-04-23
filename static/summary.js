document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".checklist-row");

    rows.forEach((row, idx) => {
        const box = row.querySelector(".checkbox");
        const modalId = row.dataset.modal;
        const modal = document.getElementById(modalId);

        row.addEventListener("click", () => {
            box.textContent = box.textContent === "❎" ? "✅" : "❎";
            modal.style.display = "flex";

            setTimeout(() => {
                modal.style.display = "none";
            }, 4000);
        });
    });
});
