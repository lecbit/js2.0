let out = document.querySelector('.out');

console.log(out);

/*for(let i = 0; i < 10; i++)
{
  for(let j = 0; j < 10; j++)
  {
    out.innerHTML = out.innerHTML + "*" ;
  }
  out.innerHTML = out.innerHTML + '<br>';
}*/

for(let i = 1;i < 10;i++)
{
for(let j = 1;j < 10;j++)
 {
   out.innerHTML += `${i}*${j}=${i * j}<br>`;
 }
 out.innerHTML = out.innerHTML + '<hr>';
}