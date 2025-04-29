document.addEventListener('DOMContentLoaded', function() {
  const goForItBtn = document.getElementById('goForItBtn');
  const fieldGoalBtn = document.getElementById('fieldGoalBtn');
  const puntBtn = document.getElementById('puntBtn');

  const goForItModal = document.getElementById('goForItModal');
  const fieldGoalModal = document.getElementById('fieldGoalModal');
  const puntModal = document.getElementById('puntModal');

  const closeGoForIt = document.getElementById('closeGoForIt');
  const closeFieldGoal = document.getElementById('closeFieldGoal');
  const closePunt = document.getElementById('closePunt');

  // Open modals
  goForItBtn.addEventListener('click', () => {
    goForItModal.style.display = "block";
  });

  fieldGoalBtn.addEventListener('click', () => {
    fieldGoalModal.style.display = "block";
  });

  puntBtn.addEventListener('click', () => {
    puntModal.style.display = "block";
  });


  // Clicking outside modal closes it too
  window.addEventListener('click', function(event) {
    if (event.target == goForItModal) {
      goForItModal.style.display = "none";
    }
    if (event.target == fieldGoalModal) {
      fieldGoalModal.style.display = "none";
    }
    if (event.target == puntModal) {
      puntModal.style.display = "none";
    }
  });
});
