
function repeat(a,b)
{
    var x=[];

    for(var i=0;i<b;i++)
    {
        a=Math.random();
        x[i]=a;
    }
    return x;
}

var b=10;
var a;
console.log(repeat(a,b));