HTMLElement.prototype.getPropertyValue = function(propertyName) {
  return getComputedStyle(this).getPropertyValue(`--${propertyName}`);
};

HTMLElement.prototype.setPropertyValue = function(propertyName, propertyValue) {
  this.style.setProperty(`--${propertyName}`, propertyValue);
};

const cards = document.querySelectorAll('.card_container');
const background = document.querySelector('body');

const defaultBackgroundColor = background.getPropertyValue('background-color');

const changeBackgroundColor = newColor =>
  background.setPropertyValue('background-color', newColor);

const resetBackgroundColor = () =>
  changeBackgroundColor(defaultBackgroundColor);

const changeBackgroundColorWithCardColor = e =>
  changeBackgroundColor(e.target.getPropertyValue('background-color'));

cards.forEach(card => {
  card.addEventListener('mouseenter', changeBackgroundColorWithCardColor);
  card.addEventListener('mouseleave', resetBackgroundColor);
});
