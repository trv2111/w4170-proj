document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('actionButton');
    button.addEventListener('click', nextDown);
  });

const scriptedPlays = [
    { down: 2, yards: 7, position: 25 },   // 2nd Down & 7
    { down: 3, yards: 5, position: 50 },   // 3rd Down & 5
    { down: 4, yards: 1, position: 75 },   // 4th Down & 1
    { down: "Touchdown", yards: 0, position: 100 } // First down achieved
  ];

let currentPlay = 0;
let isResetMode = false;

function nextDown() {
  const marker = document.getElementById('runningback');
  const button = document.getElementById('actionButton');

  if (isResetMode) {
    // Reset everything
    currentPlay = 0;
    isResetMode = false;
    button.innerText = "Start First Down";
    document.getElementById('downDisplay').innerText = "1st Down & 10 yards to go";
    marker.style.left = '0%'; // back to start
    return;
  }

  if (currentPlay < scriptedPlays.length) {
    const play = scriptedPlays[currentPlay];
    button.innerText = "Next Play";

    if (play.down === "Touchdown") {
      document.getElementById('downDisplay').innerText = "First Down Achieved!";
      marker.style.left = play.position + '%';
      
      // After touchdown, switch button to "Reset"
      isResetMode = true;
      button.innerText = "Reset";
    } else {
      const suffix = getSuffix(play.down);
      document.getElementById('downDisplay').innerText = `${play.down}${suffix} Down & ${play.yards} yards to go`;
      marker.style.left = play.position + '%';
    }

    currentPlay++;
  }
}

// Helper to get 1st, 2nd, 3rd, 4th suffix
function getSuffix(down) {
  switch(down) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}
