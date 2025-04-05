var options = {
    chart: {
          type: 'pie'
    },
    series: [44, 55, 33, 1],
    labels: ['CSS3', 'HTML5', 'JS', 'react'],
  
  }
var chart = new ApexCharts(document.querySelector("#chart"), options);
let slider_left = document.querySelector('#slider_left')
let sliderContent = document.querySelector('.slider_content')
let slider_right = document.querySelector('#slider_right')

var typed = new Typed('#element', {
  strings: ['First sentence.', '&amp; создание веб - сайтов','создание веб - сайтов'],
  loop: false,
  typeSpeed: 50,
});
const data = [
  name = dragonComabat ,
  0,1,2,3,4,5
]
let currentSlider = Math.floor(data.length / 2)

function HandelLeft(){
  if(currentSlider > 0){
    currentSlider--
    sliderContent.innerHTML = data[currentSlider]
  }else{
    currentSlider = data.length - 1
    sliderContent.innerHTML = adta[currentSlider]
  }
}
function HendleRight(){
  if(currentSlider < data.length - 1){
    currentSlider++
    sliderContent.innerHTML = data[currentSlider]

}else{
  currentSlider = 0
  sliderContent.innerHTML = data[currentSlider]
}}
chart.render();
const bot = document.querySelector('#botadd')
let visible = false
function openChat(){
  let form = document.querySelector('.bot_form')
  if(visible){
  form.style.display = 'none'
  visible = false
  }else{
  form.style.display = 'flex'
  visible = true
  }
}
function clotheChat(){
  let form = document.querySelector('.bot_form')

  alert('сообщение отправлено')
}
bot.addEventListener('click', openChat)
slider_right.addEventListener('click',HendleRight)
slider_left.addEventListener('click',HandelLeft)
