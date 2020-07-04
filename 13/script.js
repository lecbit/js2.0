let arr = {
  "xyz": 5,
  222: "hello",
  "qwe rty": 123
};
arr.moo = 333;
arr['qwe rty'] = 5;
console.log(arr['qwe rty']);
let A = 222;
console.log(arr[A]);

let out = '';
for(let key in arr)
{
  out = out + key + ' --- ' + arr[key] + '<br>';
}

document.querySelector('.out').innerHTML = out;