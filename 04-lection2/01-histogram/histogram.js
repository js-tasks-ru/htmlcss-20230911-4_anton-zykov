const MAX_BAR_HEIGHT = 50;
const barsCount = 20 + Math.floor(Math.random() * 160);
const barsContainer = document.querySelector('.histogram__bars');
for (let i = 0; i < barsCount; i++) {
  const newBar = document.createElement('div');
  newBar.classList.add('histogram__bar');
  newBar.style.height = Math.floor(Math.random() * MAX_BAR_HEIGHT) + 'px';
  barsContainer.appendChild(newBar);
}
