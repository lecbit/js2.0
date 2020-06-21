document.querySelector('#btn1').onclick = () =>
{
    let Fcheck = document.querySelector('#CB');
    console.log(Fcheck.checked);
    if(Fcheck.checked)
    {
        console.log('On');
    }
    else
    {
        console.log('Off');
    }
}

document.querySelector('#btn2').onclick = (event) =>
{
    event.preventDefault();
    let place = document.querySelector('form');
    console.log(place.one.value);
    console.log(place.two.value);
}