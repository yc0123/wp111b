function sum(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    s += i;
  }
  return s;
}

console.log('sum(10)=', sum(10))
