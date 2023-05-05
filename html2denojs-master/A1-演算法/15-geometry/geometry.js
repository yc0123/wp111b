import * as V from '../../lib/vector.ts'

// 叉積 a0*b1-a1*b0 (只適用於二維向量)
export function cross(a,b) {
  return a[0]*b[1]-a[1]*b[0]
}

// 偽極角
export function pseudoPolarAngle(v, v0) {
  let vd = V.sub(v, v0)
  let [x, y] = V.normalize(vd)
  // console.log('x,y=', x, y)
  if (x>=0 && y>=0) return y
  if (x<0 && y >=0) return (Math.PI/2) - x
  if (x<0 && y<0) return Math.PI-y
  return Math.PI*3/2+x
}

// 檢測轉向：結果為正代表是順時針右轉 (負代表逆時針左轉)
export function direction(p0, p1, p2) {
  return cross(V.sub(p2, p0), V.sub(p1, p0))
}

// 檢測 pk 是否位於 pi, pj 所形成的矩形內部。
export function inBox(pi, pj, pk) {
  let min = Math.min, max = Math.max
  return (min(pi[0], pj[0]) <= pk[0] && pk[0] <= max(pi[0], pj[0]) &&
          min(pi[1], pj[1]) <= pk[1] && pk[1] <= max(pi[1], pj[1]))
}

// 檢測 (p1, p2) 和 (p3, p4) 是否相交 
export function intersect(p1, p2, p3, p4) {
  let d1 = direction(p3, p4, p1)
  let d2 = direction(p3, p4, p2)
  let d3 = direction(p1, p2, p3)
  let d4 = direction(p1, p2, p4)
  if (d1*d2 < 0 && d3*d4 < 0) return true
  if (d1===0 && inBox(p3, p4, p1)) return true
  if (d2===0 && inBox(p3, p4, p2)) return true
  if (d3===0 && inBox(p1, p2, p3)) return true
  if (d4===0 && inBox(p1, p2, p4)) return true
  return false
}

// 本函數修改自 GrahanScan -- https://github.com/lovasoa/graham-fast
// 另一種實作方法 -- https://www.nayuki.io/page/convex-hull-algorithm
export function GrahanScan(points) {
  // The enveloppe is the points themselves
  if (points.length <= 3) return points
  
  // Find the pivot
  var imin = 0, pmin = points[imin]
  for (var i=0; i<points.length; i++) {
    if (points[i][1] < pmin[1] || (points[i][1] === pmin[1] && points[i][0] < pmin[0])) {
      imin = i
      pmin = points[i]
    }
  }
  var t = points[0]; points[0] = points[imin]; points[imin] = t
  // Attribute an angle to the points
  points[0].angle = -9999
  for (var i=1; i<points.length; i++) {
    points[i].angle = pseudoPolarAngle(points[i], points[0]) // Math.atan2(points[i][1] - pivot[1], points[i][0] - pivot[0])
  }
  points.sort(function(a, b){ return a.angle === b.angle
                                        ? a[0] - b[0]
                                        : a.angle - b.angle})
  // Adding points to the result if they "turn left"
  var result = [points[0]], len=1
  for(var i=1; i<points.length; i++){
    var a = result[len-2],
        b = result[len-1],
        c = points[i]
    while (
        (len === 1 && b[0] === c[0] && b[1] === c[1]) || // 去除重複點
        (len > 1 && direction(a,b,c) >= 0)) { // 非左轉  // (b[0]-a[0]) * (c[1]-a[1]) <= (b[1]-a[1]) * (c[0]-a[0]))
        len--
        b = a
        a = result[len-2]
    }
    result[len++] = c
  }
  result.length = len
  return result
}

export var convexHall = GrahanScan
