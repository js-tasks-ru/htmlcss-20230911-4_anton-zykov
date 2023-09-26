const MAX_BAR_HEIGHT = 60;
const barsCount = 20 + Math.floor(Math.random() * 160);
const barsContainer = document.querySelector('.histogram__bars-container');
for (let i = 0; i < barsCount; i++) {
  const newBar = document.createElement('div');
  newBar.classList.add('histogram__bar');
  newBar.style.height = Math.floor(Math.random() * MAX_BAR_HEIGHT) + 'px';
  barsContainer.appendChild(newBar);
}
