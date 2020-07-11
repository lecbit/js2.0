document.querySelector(".block-1").addEventListener("touchstart",MyTouch);
document.querySelector(".block-1").addEventListener("touchend",MyTouchEnd);
document.querySelector(".block-2").addEventListener("touchmove",MyTouchMove);


function MyTouch(event)
{
  document.querySelector(".out-2").innerHTML += event.touches.lenght;
  document.querySelector(".out-1").innerHTML += "work";
}

function MyTouchEnd(event)
{
  document.querySelector(".out-1").innerHTML += "end";
}

function MyTouchMove(event)
{
  document.querySelector(".out-1").innerHTML += "move";
}