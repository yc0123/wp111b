var m={January:1,February:2,March:3,April:4,May:5,June6:6,July:7,August:8,September:9,October:10,November:11,December:12}

function monthToIndex(em)
{
    return m[em]
}

console.log('May='+monthToIndex('May'))
console.log('October='+monthToIndex('October'))