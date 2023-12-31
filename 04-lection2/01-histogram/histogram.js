const populateHistogram = (selector, barsMin, barsMax) => {
  const MAX_BAR_HEIGHT = 3.125;
  const barsCount = barsMin + Math.floor(Math.random() * (barsMax - barsMin + 1));
  const barsContainer = document.querySelector(selector);
  for (let i = 0; i < barsCount; i++) {
    const newBar = document.createElement('div');
    newBar.classList.add('histogram__bar');
    newBar.style.height = Math.floor(Math.random() * MAX_BAR_HEIGHT * 100) / 100 + 'em';
    barsContainer.appendChild(newBar);
  }
}

export default populateHistogram;
