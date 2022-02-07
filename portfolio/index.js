console.log(
    ` Добавил видео
    добавил кнопку Play по центру, которая пропадает, прогресс видео и звкука
    звук не выключается по иконке
    ИТОГО: ~ на много не претендую
    `);



    /* БУРГЕР */
const hamburger = document.querySelector('.burger-icon');

function toggleMenu() {
  hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

/* БОКОВОЕ МЕНЮ */
function closeMenu(){
  if (event.target.classList.contains('nav-link')) {
    // здесь код, удаляющий класс `'open'` у гамбургер-иконки и у меню
    navbar.classList.remove('open');
    hamburger.addEventListener('close', toggleMenu);
  }
}

let navbar = document.querySelector('.burger-menu');

document.querySelector('#burger-icon-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
}



document.querySelector('#close-burger-icon-btn').onclick = () =>{
  hamburger.addEventListener('close', toggleMenu);
  document.querySelector('#burger-icon-btn').classList.remove('open');
  navbar.classList.toggle('active');
}

const navLinks = document.querySelectorAll('burger-menu-nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));
/* portfolio-photo */
const portfolioBtn = document.querySelector('.btn-season-item');
const portfolioImage = document.querySelectorAll('.portfolio-image');


let activBtn = document.querySelectorAll(`button.btn-season-item`);
activBtn.forEach((elem) => elem.classList.remove('active-button'));
/* portfolioBtn.addEventListener('click', () => {
  portfolioImage.src = "./assets/img/winter/1.jpg"
}); */

/* portfolioBtn.addEventListener('click', () => {
  portfolioImage.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
}); */



const portfolioBtns = document.querySelector('.season'); //общий родитель для кнопок

let flag; // глобальный флаг для отслеживания цвета темы
portfolioBtns.addEventListener('click', changeImage); //по клику выполнить функцию changeImage()

function changeImage(event) {
  if(event.target.classList.contains('btn-season-item')) { //undefined reading 'target'

    // здесь код функции, меняющей src изображений
    let s = event.target.dataset.season; //dataset
    console.log("сейчас s =", s);

    console.log(event);
    portfolioImage.forEach((img, index) => img.src =`./assets/img/${s}/${index+1}.jpg`);
    
    /* let activBtn= document.querySelector(`.btn-season-item[data-season =${s} ]`); */
    
    changeClassActive(s);
    
  }
}

function changeClassActive(s){

  let activBtn = document.querySelectorAll(`button.btn-season-item`);
  console.log(activBtn);//список кнопок
//удалим классы
  /* activBtn.classList.remove('active-button'); */
  activBtn.forEach((elem) => elem.classList.remove('active-button'));
  let goldenBtn= document.querySelector(`.btn-season-item[data-season =${s} ]`);
  
  /* flag == 2 ? goldenBtn.classList.toggle('active-light'):goldenBtn.classList.toggle('active-button'); */
  goldenBtn.classList.toggle('active-button');
  getButtonBlack(goldenBtn);
} 

function getButtonBlack(b){
  let activBtn = document.querySelectorAll(`button.btn-season-item`);
  
  activBtn.forEach((elem) => elem.classList.remove('active-light'));

  let temp = document.querySelector(`.active-button`);
  temp.classList.add('active-light');
  
  /* goldenBtn.classList.toggle('.active-button'); */
}

/* PreLoader */
const seasonsArr = ['winter', 'spring', 'summer', 'autumn'];

/* console.log(seasonsArr); */

const portfolioButtons = document.querySelector('.btn-season-item'); 
const portfolioImages = document.querySelectorAll('.portfolio-image'); 
/* console.log(portfolioImages); */

portfolioBtns.addEventListener('click', (event) => changeImage(event)); 
 

/* ========================== */
function preloadSummerImages() { 
 for(let i = 1; i <= 6; i++) {
   const img = new Image();
   img.src = `./assets/img/summer/${i}.jpg`;
   seasonsArr.push(img);
 } 
}
preloadSummerImages();
 
function preloadAutumnImages() { 
 for(let i = 1; i <= 6; i++) { 
  const img = new Image(); 
  img.src = `./assets/img/autumn/${i}.jpg`;
  seasonsArr.push(img);
 } 
} 
preloadAutumnImages(); 

function preloadWinterImages() { 
 for(let i = 1; i <= 6; i++) { 
  const img = new Image(); 
  img.src = `./assets/img/winter/${i}.jpg`;
  seasonsArr.push(img);
 } 
} 
preloadWinterImages(); 

function preloadSpringImages() { 
  for(let i = 1; i <= 6; i++) { 
  const img = new Image(); 
  img.src = `./assets/img/spring/${i}.jpg`;
 seasonsArr.push(img);
 } 
} 
preloadSpringImages();
/* console.log(seasonsArr); */
/* смена темы */


let switchMode = document.getElementById('switchMode');

switchMode.onclick = function () {
  
  let imgswitchMode = document.querySelector(".header-container button img");
  let theme = document.getElementById("theme-light"); //ловим тему по id

  if(theme.getAttribute("href") == "light-mode.css") {
    theme.href = "style.css";
    imgswitchMode.src="./assets/svg/sun.svg";
    
  } else {
    theme.href = "light-mode.css";
    imgswitchMode.src="./assets/svg/lune.svg";
    
  }
  
}

/* ========================= */
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
}
window.addEventListener('load', getLocalStorage)
/* ========================= */

/* TRANSLATION */
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}
/* Если вопрос был про то, как именно реализовать саму кнопку - все просто. Создаешь , две штуки с разными id. 
После этого JS-ом вешаешь обработчик событий. elementButton = document.getElementById(id);

На него вешаешь обработчик - elementButtom.addEventListener("click", function(){тело функции}); */

/* let rus = document.getElementById("unique-id-for-ru"); */
let radio = document.getElementsByName('lang');
console.log("rus = ", radio);
let m = document.querySelectorAll('input[type=radio]');
let y = document.getElementById('uniqid1');
let u = document.getElementById('uniqid2');

let inputs = document.querySelectorAll('input[type=radio]');

y.onclick = function(event) { getData(); };
u.onclick = function(event) { getData(); };
let init = "en";
console.log(init);
/* radio.forEach(e=>console.log(e.value)); */
/* u.addEventListener("click", x);
y.addEventListener("click", x); */


function getData() {
  
  
  inputs.forEach( function (radio){
    if (radio.checked){
      console.log(radio.value + " is checked");
      init = radio.value;
    
      console.log("radio.checked=", radio.checked);//
      console.log("radio.value= ",radio.value);//получил ru
    }
      else
      console.log(radio.value + " is not checked");

    });
    console.log(init);

    getTranslate(init);
  }
  
const foo = (event) =>{
  console.log(event);
  /* console.log(s); */
  console.log(this.value);
}

function getTranslate(temp){
  console.log("клик 1", temp);
  let listOfdata = document.querySelectorAll('[data-i18]');
  listOfdata.forEach(elem=> elem.textContent = i18Obj[`${temp}`][elem.dataset.i18]);
}
/* video */



const vidWrapper = document.querySelector('div.video-player');
const myVid = vidWrapper.querySelector('video.player__video');
const goldBtnplay = document.getElementById('golden-btn');
console.log(goldBtnplay);
// controls
const controlPlay = vidWrapper.querySelector('.player__button');
const controlVol = vidWrapper.querySelector('.player__slider[name="volume"]');

const controlSkip = vidWrapper.querySelectorAll('.player__button[data-skip]');
const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
const controlProgress = vidWrapper.querySelector('.progress');
const progressBar = vidWrapper.querySelector('.progress__filled');

// events
var drag;
var grap;

myVid.addEventListener('click', toggleVideo);

controlPlay.addEventListener('click', toggleVideo);
controlVol.addEventListener('change', updateVol);
goldBtnplay.addEventListener('click', toggleVideo);

controlFullScreen.addEventListener('click', goFullScreen);
controlSkip.forEach(control => control.addEventListener('click', forward));
controlProgress.addEventListener('mouseover', function(){drag = true});
controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
controlProgress.addEventListener('mousedown', function(){grap = drag});
controlProgress.addEventListener('mouseup', function(){grap = false});
controlProgress.addEventListener('click', updateCurrentPos);
controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

var progression;
controlPlay.innerHTML = "►";
// functions
function toggleVideo() {
  if (myVid.paused) {
    myVid.play();
    controlPlay.innerHTML = "❚ ❚";
    controlPlay.
    goldBtnplay.style.display = "none";
    updateProgress();
    progression = window.setInterval(updateProgress, 200);
  } else {
    myVid.pause();
    controlPlay.innerHTML = "►";
    clearInterval(progression);
    goldBtnplay.style.display = "block";
  };
}
function updateVol(){
  var volume = this.value;
  myVid.volume = volume;
}
function updateRate(){
  var rate = this.value;
  myVid.playbackRate = rate;
}
function goFullScreen(){
  console.dir(myVid);
  if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
}
function forward(){
  var value = Number(this.dataset.skip);
  myVid.currentTime = myVid.currentTime + value;
}
function updateProgress() {
  var progress = myVid.currentTime / myVid.duration;
  progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
}
function updateCurrentPos(e){
  // offset of the progress bar / video wrapper width
  var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
  progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  myVid.currentTime = newProgress * myVid.duration;
}

/* .мой video-player его player */