function counter()
{
  let a = 0;
  console.log("hello");
  a = 0;
  return function()
  {
    a++;
    return a;
  }
}

let plus = counter();

console.log(plus());
console.log(plus());
console.log(plus());