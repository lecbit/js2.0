let div = document.querySelectorAll('.one');
console.log(div);

// for(let i = 0; i<div.length; i++)
// {
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }

// function two()
// {
//     console.log('work!');
// }

// let b = document.getElementsByClassName('one');

// for(let i=0; i<b.length; i++)
// {
//     b[i].style.border = '3px black solid';
// }

document.querySelector("button").onclick = () =>
{
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for(let i=0;i<r.length;i++)
    {
        if(r[i].checked)
        {
            console.log(r[i].value);
        }
    }
}