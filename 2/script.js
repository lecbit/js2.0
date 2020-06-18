let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let b = document.querySelector('.out');

button.onclick = function ()
{
    let a = inputIn.value;
    console.log(a);
    b.innerHTML = a;
    inputIn.value = '';
}