const Url = "https://jsonplaceholder.typicode.com/users";

const xhr = new XMLHttpRequest();
xhr.open("GET", Url);

xhr.responseType = "json";

xhr.onload = function()
{
    if(xhr.status >=400)
    {
        console.log(xhr.response);
    }
    else
    {
    console.log(xhr.response);
    }
}

xhr.onerror = function()
{
    console(xhr.response);
}

xhr.send();