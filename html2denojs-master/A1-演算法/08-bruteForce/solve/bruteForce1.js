function f(x) {
  return x*x-4*x+1;
}

for (var x=-100; x<=100; x+=0.001) {
  if (Math.abs(f(x)) < 0.001)
    console.log("x=", x, " f(x)=", f(x));
}