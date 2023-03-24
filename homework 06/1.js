function vadd(a,b)
{
    for(var c=0;c<a.length;c++)
    {
        a[c]+=b[c]
    }
    return a
}

var v1=[1,1],v2=[2,2]

console.log('vadd(v1,v2)=',vadd(v1,v2))