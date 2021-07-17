var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y; 
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
color = "black"; 
width_of_line = 1; 
var radius = 3;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e)
{
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup (e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    console.log("in my mouse move function");

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        console.log("in my mouse down");
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);

        ctx.stroke();
    }

   
}

