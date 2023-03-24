function mmul(a,b)
{
    var x=[]

    for(var c=0;c<a.length;c++)
    {
        x[c]=[]
    }

    for (var i = 0; i < a.length; i++)
    {
        for (var j = 0; j < b[0].length; j++)
        {
            var sum = 0

            for (var k = 0; k < a[0].length; k++)
            {
                sum += (a[i][k] * b[k][j])
            }
            x[i][j]=sum
        
        }
    }
    return x
}

var m1=[[1,1,1],[1,1,1],[1,1,1]],m2=[[2,2,2],[2,2,2],[2,2,2]]

console.log('mmul(m1,m2)=',mmul(m1,m2))