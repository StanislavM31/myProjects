console.log("hello");
console.log("hello2");

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