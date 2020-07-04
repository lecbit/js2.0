let arr = [1, 5, 10, 0, -2, -5];
let b = arr.map(function(item, index)
{
    return item;
})


let c = arr.filter(
    function(index, item)
{
    if(index>0)
    {
        return true;
    }
})

console.log(b);