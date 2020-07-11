let a = 5;
a = a*2;

try {
  document.querySelector(".NOtest").innerHTML = a;
} 
catch (e) 
{
  alert("Error");
  console.log(e);
  console.log("1");
}

console.log("a");
t1();

function t1()
{
  console.log("fine");
}