const requestUrl = "https://jsonplaceholder.typicode.com/users";
function sendRequest(method, url, body = null){
  return new Promise((resolve, reject) => 
  {

const xhttp = new XMLHttpRequest();

xhttp.open(method, url)
xhttp.responseType = "json";
xhttp.setRequestHeader("Content-type", "application/json")
xhttp.onload = function()
{
  if(xhttp.status>=400)
  {
  reject(xhttp.response);
  }
  else
  {
    resolve(xhttp.response);
  }
}

xhttp.send(JSON.stringify(body));
})
}

const body = {
  name: "Vladimir",
  age: "20"
}

sendRequest("POST",requestUrl,body)
.then(data => console.log(data))