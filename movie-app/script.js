console.log("hello");
console.log("hello2");

/* const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86"; */
const API_KEY = "287c752e-5820-4968-b165-e861c0a28d4b";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";

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

function showMovies(data){
    const moviesEl = document.querySelector(".movies");

    data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
        /* Свойство интерфейса Element innerHTML устанавливает или получает HTML или XML разметку дочерних элементов. */
        movieEl.innerHTML=`
            <div class="movie__cover-in">
            <img src="${movie.posterUrlPreview}" class="movie__cover" alt="${movie.nameRu}">
                    <div class="movie__cover--darkened"></div>
                </div>
                <div class="movie__info">
                    <div class="movie__title">${movie.nameRu}</div>
                    <div class="movie__category">${movie.genres.map((genre)=>`${genre.genre}`)}</div>
                </div>
                <div class="movie__average movie__average--green">${movie.rating}</div>
            </div>`;
            moviesEl.appendChild(movieEl);
            /* .appendChild() добавляет узел в конец списка дочерних элементов указанного родительского узла.  */
    });
}