console.log(
    ` Сделал только смену изображений по сезонам по клике кнопок +25
    сделал переключение на темную/светлую тему ( не отображается нажатая кнопка в секции Portfoio/season) +15
    и я не уверен работает ли кэширование изображений =(
    
    можете написать ваши ники в discord, господа проверяющие. возможно успею еще чтонибудь наШкодить до окончания кроссчека,
    с уважением и пониманием)))
    ================= правка ======================
    - кнопки поправил теперь работают и в темной и светлой теме (при переключении темы нажатая кнопка меняет свой цвет)
    - поправил блок en/ru который сыпался при разрешении примерно 800px
    - кэширование тоже вроде работает
    ================= правка ======================
    добавил переключение языка
    ИТОГО: ~ 65
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