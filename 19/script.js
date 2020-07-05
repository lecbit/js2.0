document.querySelector('.block-one').onclick = function()
{
    console.log('click');
}

document.querySelector('.block-two').ondblclick = function()
{
    console.log('clickDouble');
}


document.querySelector('.block-three').onmouseenter = function()
{
    this.style.background = "red";
}

document.querySelector('.block-three').onmouseleave= function()
{
    this.style.background = "green";
}

document.querySelector('.block-three').onmousedown = function()
{
    this.style.background = "orange";
}

document.querySelector('.block-three').onmouseup = function()
{
    this.style.background = "blue";
}

let val = 10;
document.querySelector('button').onclick = function()
{
    val++;
    document.querySelector('progress').value = val;
}