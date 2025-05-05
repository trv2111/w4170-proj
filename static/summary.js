document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".checklist-row");
    const modals = document.querySelectorAll(".modal");

    rows.forEach((row) => {
        const box = row.querySelector(".checkbox");
        const modalId = row.dataset.modal;
        const modal = document.getElementById(modalId);

        row.addEventListener("click", () => {
            box.textContent = box.textContent === "❎" ? "✅" : "❎";
            modal.style.display = "flex";
        });
    });

modals.forEach((modal) => {
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
});