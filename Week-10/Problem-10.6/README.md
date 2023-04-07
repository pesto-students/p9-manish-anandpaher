<h2>Problem 10.6: All Path from source to target</h2>

Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e.,there is a directed edge from node i to node graph[i][j]).

Example 1:

![image](https://user-images.githubusercontent.com/46132450/230535219-3f85e5f6-7d66-4194-9812-4e231d44f234.png)

Input: graph = [[1,2],[3],[3],[]]

Output: [[0,1,3],[0,2,3]]

Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

Example 2:

![image](https://user-images.githubusercontent.com/46132450/230535249-eebaf962-5897-4541-b060-01aa99eb7d83.png)

Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]

Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]

Constraints:

●n == graph.length

●2 <= n <= 15

●0 <= graph[i][j] < n

●graph[i][j] != i (i.e., there will be no self-loops).

●All the elements of graph[i] are unique.

●The input graph is guaranteed to be a DAG.
