const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null)
{
   return fetch(url).then(response => {
       return response.json();
   })
}

const body = {
    name: "Vladimir",
    age: "22"
}

sendRequest("GET", requestUrl, body)
.then(data => console.log(data))
.catch(err => console.log(err))