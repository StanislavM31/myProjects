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
    ИТОГО: ~ 55
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
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me'
  },
  'ru' : {
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
  }
}
/* Если вопрос был про то, как именно реализовать саму кнопку - все просто. Создаешь , две штуки с разными id. 
После этого JS-ом вешаешь обработчик событий. elementButton = document.getElementById(id);

На него вешаешь обработчик - elementButtom.addEventListener("click", function(){тело функции}); */

/* let rus = document.getElementById("unique-id-for-ru"); */
let radio = document.getElementsByName('lang');
console.log("rus = ", radio);
let m = document.querySelectorAll('input[type=radio]');
let u = document.getElementById('uniqid1');
let y = document.getElementById('uniqid2');

y.onclick = function(event) { getData(); };
u.onclick = function(event) { getData(); };


/* radio.forEach(e=>console.log(e.value)); */
/* u.addEventListener("click", x);
y.addEventListener("click", x); */


function getData() {
  let init;
  var inputs = document.querySelectorAll('input[type=radio]');
  inputs.forEach( function (radio){
    if (radio.checked){
      console.log(radio.value + " is checked");
      init = radio.value;
      console.log(radio.value);//получил ru
    }
      else
      console.log(radio.value + " is not checked");

    });
    
/*     radio.forEach(function(item){
      if (item.checked == 'true'){
        console.log('priv');
        
      }
      console.log(init);
    }); */

    /* return init; */
    getTranslate(init);
  }
  
/* let language = document.getElementsByTagName("input"); */
/* let language = document.getElementById("unique-id-for-ru"); */
/* console.log("language = ", language); */
/* let temp = language.id; */
/* rus.addEventListener("click", getTranslate(rus)); */

/* language.addEventListener("click", getTranslate(temp)); */


const foo = (event) =>{
  console.log(event);
  /* console.log(s); */
  console.log(this.value);
  /* let s123 = event.target.label.innerText; */
  
  console.log("Поздравляю. Вы скоро отьедете кукухой");
}

/* radio.addEventListener("click", foo); */

/* radio.addEventListener("click", foo()); */

function getTranslate(temp){

  console.log("клик 1", temp);
  let listOfdata = document.querySelectorAll('[data-i18]');
  listOfdata.forEach(elem=> elem.textContent = i18Obj[`${temp}`][elem.dataset.i18]);
}