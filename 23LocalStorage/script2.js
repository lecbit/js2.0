let num = 0;
localStorage.setItem('b1', num);
document.querySelector('button').onclick = function()
{
    num++;
    localStorage.setItem('b1', num);
}