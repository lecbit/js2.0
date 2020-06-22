let out = document.querySelector('.out');

console.log(out);

for(let i = 0; i < 10; i++)
{
  for(let j = 0; j < 10; j++)
  {
    out.innerHTML = out.innerHTML + "*" ;
  }
  out.innerHTML = out.innerHTML + '<br>';
}