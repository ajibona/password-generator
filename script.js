const lengthValue = document.querySelector('.js__length--value');
const rangeSlider = document.querySelector('.js__slider');

//slider to display the length per the slider values
rangeSlider.addEventListener('input', ()=>{
  const value = rangeSlider.value;
  lengthValue.textContent = value
})