let a = new Set();
a.add(1);
a.add(2);
a.add(3);
a.add('hello');
a.add(1);
a.add('1');

//a.clear();
//a.delete('hello');

console.log(a);
console.log(a.size);

console.log(a.has(1));

for(let fff of a)
{
  console.log(fff);
}

let arr = [1, 2, 3, 4, 5, 'hello', 5, 1, 3];

let b = new Set(arr);

let bArr = Array.from(b);
console.log(bArr);
console.log(bArr[2]);