HTMLElement.prototype.getPropertyValue = function(propertyName) {
  return getComputedStyle(this).getPropertyValue(`--${propertyName}`);
};

const card = document.querySelector('.card_container');
// alert(card.getPropertyValue('card-color'));
