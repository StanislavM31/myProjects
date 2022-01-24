console.log(
    `1) Вёрстка валидная +10
    2) Вёрстка семантическая +20
    - <header>, <main>, <footer> +2
    - шесть элементов <section> (по количеству секций) +2
    - только один заголовок <h1> +2
    - пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2
    - один элемент <nav> (панель навигации) +2
    - два списка ul > li > a (панель навигации, ссылки на соцсети) +2
    - десять кнопок <button> +2
    - два инпута: <input type="email"> и <input type="tel"> +2
    - один элемент <textarea> +2
    - три атрибута placeholder +2 
    3) Вёрстка соответствует макету +48
    - блок <header> +6
    - секция hero +6
    - секция skills +6
    - секция portfolio +6
    - секция video +6
    - секция price +6
    - секция contacts +6
    - блок <footer> +6
    4) Требования к css + 12
    - для построения сетки используются флексы или гриды +2
    - при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2
    - фоновый цвет тянется на всю ширину страницы +2
    - иконки добавлены в формате .svg. SVG может быть добавлен любым способом.\n Обращаем внимание на формат, а не на способ добавления +2
    - изображения добавлены в формате .jpg +2
    - есть favicon +2
    5) Интерактивность, реализуемая через css +20
    - плавная прокрутка по якорям +5
    - ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5
    - интерактивность (изменение курсора, плавное изменение цвета шрифта и кнопки при наведении) +5
    - обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5
    ИТОГО: 100
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