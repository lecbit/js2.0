const requestUrl = "https://jsonplaceholder.typicode.com/users";
const xhttp = new XMLHttpRequest();

xhttp.open("GET", requestUrl)
xhttp.responseType = "json";
xhttp.onload = function()
{
   
    console.log(xhttp.response);
}

xhttp.send();