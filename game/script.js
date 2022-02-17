console.log("Game");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/* оси х,у */
let x = canvas.width/2;
let y = canvas.height-30;

/* шаг */
let dx = 2;
let dy = -2;

draw();

function draw(){
    console.log("drawFoo");

    ctx.clearRect(0,0,canvas.width, canvas.height); // чистим след от предыдущ.прорисовки
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x = x +dx;
    y = y +dy;
}
setInterval(draw, 100);