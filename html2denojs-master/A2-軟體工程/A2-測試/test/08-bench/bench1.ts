import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";

bench(function forIncrementX1e9(b): void {
  b.start();
  for (let i = 0; i < 1e9; i++);
  b.stop();
});

runBenchmarks();