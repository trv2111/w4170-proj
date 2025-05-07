document.addEventListener('DOMContentLoaded', () => {
  const goForItBtn   = document.getElementById('goForItBtn');
  const fieldGoalBtn = document.getElementById('fieldGoalBtn');
  const puntBtn      = document.getElementById('puntBtn');

  const goForItModal   = document.getElementById('goForItModal');
  const fieldGoalModal = document.getElementById('fieldGoalModal');
  const puntModal      = document.getElementById('puntModal');

  function markVisited(btn){ btn.classList.add('visited'); }

  goForItBtn .addEventListener('click', () => { markVisited(goForItBtn );   goForItModal .style.display = 'block'; });
  fieldGoalBtn.addEventListener('click', () => { markVisited(fieldGoalBtn); fieldGoalModal.style.display = 'block'; });
  puntBtn     .addEventListener('click', () => { markVisited(puntBtn     ); puntModal     .style.display = 'block'; });

  window.addEventListener('click', e => {
    if(e.target === goForItModal)   goForItModal.style.display   = 'none';
    if(e.target === fieldGoalModal) fieldGoalModal.style.display = 'none';
    if(e.target === puntModal)      puntModal.style.display      = 'none';
  });
});
