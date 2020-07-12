const requestUrl = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null)
{
    return new Promise((resolve, reject) => 
    {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = "json";
        xhr.setRequestHeader("Content-type", "application/json");

        xhr.onload = function()
        {
            if(xhr.status >=400)
            {
                reject(xhr.response);
            }
            else
            {
            resolve(xhr.response);
            }
        }

        xhr.onerror = function()
        {
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(body));
})
}

const body = {
    name: "Vladimir",
    age: "22"
}

sendRequest("POST", requestUrl, body)
.then(data => console.log(data))
.catch(err => console.log(err))