function madd(a,b)
{
    for(var c=0;c<a.length;c++)
    {
        for(var d=0;d<a[0].length;d++)
        {
            a[c][d]+=b[c][d]
        }
    }
    return(a)
}

var m1=[[1,1,1],[1,1,1],[1,1,1]],m2=[[2,2,2],[2,2,2],[2,2,2]]

console.log('madd(m1,m2)=',madd(m1,m2))