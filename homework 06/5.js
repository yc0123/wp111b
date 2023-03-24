function repeat(f,n)
{
    var x=[]

    while(n--)
    {
        x[n]=f()
    }
    return x
}

console.log('repeat(Math.random, 10)=',repeat(Math.random,10))