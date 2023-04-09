function findJudge(n, trust) {
  let degrees = Array(n + 1).fill(0);
  for (let [a, b] of trust) {
    degrees[a]--;
    degrees[b]++;
  }
  for (let i = 1; i <= n; i++) {
    if (degrees[i] === n - 1) return i;
  }

  return -1;
}

let n = 2;
let trust = [[1, 2]];

console.log(findJudge(n, trust));
