console.log("hello");
console.log(`
Ваша отметка - 55 балла(ов)
на странице есть несколько карточек фильмов и строка поиска.+5
в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс+5
При загрузке приложения на странице отображаются карточки фильмов с полученными от API данными +10
Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся карточки фильмов, в названиях которых есть это слово, если такие данные предоставляет API +10
при открытии приложения курсор находится в поле ввода 0
есть placeholder +5
автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5
поисковый запрос можно отправить нажатием клавиши Enter +5
после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5
в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5
Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения(обводка круга рейтинга меняет цвет в зависимости от рейтинга фильма) +5

Не выполненные/не засчитанные пункты:
1) при открытии приложения курсор находится в поле ввода

Итого: 60
`);

/* const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86"; */
const API_KEY = "287c752e-5820-4968-b165-e861c0a28d4b";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
getMovies(API_URL_POPULAR);

async function getMovies(url){
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            'X-API-KEY': API_KEY,
        },
    });
    const respData = await resp.json();
    
    console.log(respData);
    showMovies(respData);
}
function getColorRating(rate){
    if (rate >= 7) {
        return "green";
    } else if (rate > 5) {
        return "yellow";
    } else return "red";
}
function showMovies(data){
    const moviesEl = document.querySelector(".movies");

    /* почистим предыдущие результаты*/
    document.querySelector(".movies").innerHTML="";

    data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
        /* Свойство интерфейса Element innerHTML устанавливает или получает HTML или XML разметку дочерних элементов. */
        let r = movie.rating[0]+movie.rating[1]+movie.rating[2];
        if(movie.rating[1]!=="."){
            r = movie.rating[0]+'.0'; //небольшой костыль для некорректных данных
        }
        
        movieEl.innerHTML=`
            <div class="movie__cover-in">
            <img src="${movie.posterUrlPreview}" class="movie__cover" alt="${movie.nameRu}">
                    <div class="movie__cover--darkened"></div>
                </div>
                <div class="movie__info">
                    <div class="movie__title">${movie.nameRu}</div>
                    <div class="movie__category">${movie.genres.map((genre)=>`${genre.genre}`)}</div>
                </div>
                <div class="movie__average movie__average--${getColorRating(r)}">${r}</div>
            </div>`;
            console.log(movie.nameRu, movie.rating.length);
            moviesEl.appendChild(movieEl);
            /* .appendChild() добавляет узел в конец списка дочерних элементов указанного родительского узла.  */
    });
}

const form = document.querySelector("form");
const search = document.querySelector(".header__search");

/* слушатель */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
    if(search.value){
        getMovies(apiSearchUrl);
        /* очищаем строку поиска */
        /* search.value = ""; */
    }
})

/* очищаем по клику на крестик */
const clean = document.querySelector(".closeModal");
clean.addEventListener('click', e =>{
    search.value = '';
})