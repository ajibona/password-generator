const lengthValue = document.querySelector('.js__length--value');
const rangeSlider = document.querySelector('.js__slider');

rangeSlider.dispatchEvent(new Event('input'))
//slider to display the length per the slider values
rangeSlider.addEventListener('input', ()=>{
  const value = rangeSlider.value;
  lengthValue.textContent = value

   sliderFillColor = value > rangeSlider.min ? (value - rangeSlider.min) / (rangeSlider.max - rangeSlider.min) * 100 : value === 0;
   
  if(value <= rangeSlider.max){
    rangeSlider.style.background = '#a4ffaf'
  }else if(value >= rangeSlider.min){
    rangeSlider.style.background = `linear-gradient(to right, #a4ffaf ${sliderFillColor}%, #a4ffaf${sliderFillColor}%)`
  }else if(value === 1){
    rangeSlider.style.background = '#a4ffaf'
  }
  // rangeSlider.style.background = ``

})

//copy action
const copySvg = document.querySelector('.js__copy');
const copiedShown = document.querySelector('.copied');

copySvg.addEventListener('click', ()=>{
  setTimeout(()=>{
    copiedShown.style.display = 'block'
  }, 300)

  setTimeout(()=>{
    copiedShown.style.display = 'none'
  }, 2000)
})
