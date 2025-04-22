document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const football = document.getElementById('football');
    const text = document.getElementById('text');
  
    const successRates = {
      1: 74.6,
      2: 64.1,
      3: 55.2,
      4: 48.7,
      5: 42.3,
      6: 37.4,
      7: 33.2,
      8: 30.1,
      9: 28.3,
      10: 27.8
    };
  
    function updateSlider() {
      const value = parseInt(slider.value);
      const percent = (value - 1) / 9;
      const trackWidth = slider.offsetWidth;
      const ballX = percent * (trackWidth - 60); // 60 = width of football
  
      football.style.left = `${ballX}px`;
      text.style.left = `${ballX + 30}px`; // center text over ball
      text.innerHTML = `4th & ${value}<br>${successRates[value].toFixed(1)}% Success`;
    }
  
    slider.addEventListener('input', updateSlider);
    updateSlider(); // Initialize on load
  });
  