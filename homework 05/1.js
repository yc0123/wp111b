function isPrime(n)
{
    if(n<=1)
    {
        return false
    }
    for(var c=2;c<=Math.sqrt(n);c++)
    {
        if(n%c===0)
        {
            return false
        }
    }
    return true
}

console.log('isPrime(1)=',isPrime(1))
console.log('isPrime(2)=',isPrime(2))
console.log('isPrime(3)=',isPrime(3))
console.log('isPrime(4)=',isPrime(4))