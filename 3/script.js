let input = document.querySelector('.inputIn');
let button = document.querySelector('button');

button.onclick = () =>
{
    let num = +input.value;
    if(num >= 16 && num < 60)
    {
        console.log('welcome!!!');
    }
    else if(num > 60)
    {
        console.log('Mnoho');
    }
    else
    {
        console.log('ACCESS DENIED');
    }
    switch(num)
    {
        case 15:
            console.log('Vam 15');
            break;
        case 16:
            console.log('Vam 16');
            break;
        default:
            console.log('ooook');
    }
}