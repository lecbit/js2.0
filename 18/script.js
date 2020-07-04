let arr = 'what,your,name';

console.log(arr.split(','));

let arr2 = [6,2,5];
console.log(arr2);
console.log(arr2.join('--'));

arr2.forEach(function(element,inde)
{
    console.log(inde);
    console.log(element+=element);
    console.log('---');
});

console.log(arr2);