function isPathExists(n, edges, source, destination) {
  let graph = Array.from({ length: n }, () => []);

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let queue = [source];
  let visited = new Set();
  while (queue.length) {
    let u = queue.shift();
    if (u === destination) return true;
    visited.add(u);

    for (let v of graph[u]) {
      if (!visited.has(v)) queue.push(v);
    }
  }

  return false;
}

let n = 3;
let edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
let source = 0;
let destination = 2;

console.log(isPathExists(n, edges, source, destination));
