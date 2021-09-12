canvas= document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
mouseEvent="";
var radius=20;
var colour="black";
var width=3;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseEvent="mousedown";
colour=document.getElementById("co").value;
width=document.getElementById("wi").value;
radius=document.getElementById("ra").value;
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
currentpofX=e.clientX-canvas.offsetLeft;
currentpofY=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown")
{
    
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    ctx.arc(currentpofX,currentpofY,radius,0,2*Math.PI);
    ctx.stroke();
}}