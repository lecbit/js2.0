/*
document.querySelector('.i-1').onkeypress = function(event)
{
    console.log('keypress');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log(event);
}
*/

document.querySelector('.i-1').onkeydown = function(event)
{
    console.log('keypdown');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log(event);
    if(event.key=='CapsLock')
    {
        document.querySelector('.i-2').checked = true;
    }
    else
    {
        document.querySelector('.i-2').checked = false;
    }
}

document.querySelector('.i-3').onkeypress = function(event)
{
    console.log('keypdown');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code);
    console.log('key: ' + event.key);
    console.log(event);
    const a = 
    {
        q: 'w',
        w: 'e'
    }
    document.querySelector('.i-3').value = a[event.key];
    return false;
}