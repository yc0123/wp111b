function vdot(a,b)
{
    var x=0

    for(var c=0;c<a.length;c++)
    {
        x+=(a[c]*b[c])
    }
    return x
}

var v1=[1,1],v2=[2,2]

console.log('vdot(v1,v2)=',vdot(v1,v2))