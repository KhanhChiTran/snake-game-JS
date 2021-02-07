const canvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");
let foodRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 50;
let color = "red";

function drawFood() {
  ctx.beginPath();
  ctx.arc(x, y, foodRadius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}
console.log(drawFood());
