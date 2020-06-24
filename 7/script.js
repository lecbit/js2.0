let button = document.querySelector('button');
let c=0;
function calc(a,b)
{
  c=c+a+b;
  return c;
}

button.onclick = () =>
{
 console.log(calc(2, 2));
}