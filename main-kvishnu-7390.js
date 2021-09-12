canvas= document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var colour=document.getElementById("co").innerHTML;
var width=document.getElementById("wi").innerHTML;
var radius=document.getElementById("ra").innerHTML;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseEvent="mousedown";
colour=document.getElementById("co").value;
width=document.getElementById("wi").value;
radus=document.getElementById("ra").value;
}

function mymousemove(e){
currentpofX=e.clientX-canvas.offsetLeft;
currentpofY=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown")
{
   
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=width;
    clientX.arc(currentpofX,currentpofY,radius,0,2*Math.PI);
    ctx.stroke();
}}