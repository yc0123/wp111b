import {direction, intersect} from './geometry.js'

let p0 = [0,0], p1 = [1,1], p2 = [2, 1], p3 = [-1, 0]

console.log('direction(p0, p1, p2)=', direction(p0, p1, p2))
console.log('intersect(p0, p1, p2, p3)=', intersect(p0, p1, p2, p3))

