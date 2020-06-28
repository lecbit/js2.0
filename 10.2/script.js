let a = [1,2,3]
let b = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let out = '';

for(let i=0; i<b.length; i++)
{
    for(let j=0; j<b[i].length; j++)
    {
        out+= b[i][j] + ' ';
    }
    out+='<br>';
}

document.querySelector('.out').innerHTML = out;

let d = [1,0,0,0,0]

document.querySelector('.out2').innerHTML = d;

let k = 0;

document.querySelector('button').onclick = function()
{
    if(k+1<5)
    {
        d[k]=0;
        d[k+1]=1;
        k++;
    }
    document.querySelector('.out2').innerHTML= d;
}