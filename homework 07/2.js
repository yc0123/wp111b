function count(list)
{
    var x={}

    for(var c of list)
    {
        if(c in x)
        {
            x[c]++
        }
        else
        {
            x[c]=1
        }
    }
    return x

}

var list = ['a', 'dog', 'chase', 'a', 'cat']

console.log(count(list))