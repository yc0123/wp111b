class Matrix
{
    constructor (m)
    {
        this.m=m
    }
    add(a)
    {
        var y=[]

        for(var c=0;c<this.m.length;c++)
        {
            y[c]=[]
        }

        for(var c=0;c<this.m.length;c++)
        {
            for(var d=0;d<this.m[0].length;d++)
            {
                y[c][d]=this.m[c][d]+a[c][d]
            }
        }
        return y
    }
    mul(a) 
    {
        var y=[]

        for(var c=0;c<this.m.length;c++)
        {
            y[c]=[]
        }
        for (var i = 0; i < this.m.length; i++)
        {
            for (var j = 0; j < a[0].length; j++)
            {
                var sum = 0

                for (var k = 0; k < this.m[0].length; k++)
                {
                    sum += (this.m[i][k] * a[k][j])
                }
                y[i][j]=sum
            }
        }
        return y
    }
}

var m1=[[1,1,1],[1,1,1],[1,1,1]],m2=[[2,2,2],[2,2,2],[2,2,2]]

var x=new Matrix(m1)

console.log('x.add(m2)=',x.add(m2))

console.log('x.mul(m2)=',x.mul(m2))