console.log("hello");
console.log("hello2");

/* const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86"; */
const API_KEY = "287c752e-5820-4968-b165-e861c0a28d4b";
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"

getMovies(API_URL_POPULAR);

async function getMovies(url){
    const resp = await fetch(url,{
        headers: {
            "Content-Type": "application/json",
            'X-API-KEY': API_KEY,
        },
    });
    const respData = await resp.json();
    console.log(respData);
}