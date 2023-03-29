<h2>Problem 8.2: Rotate Linked List</h2>

Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,

where k is a given positive integer smaller than or equal to length of the linked list.

Example 1:

Input:

N = 5

value[] = {2, 4, 7, 8, 9}

k = 3

Output: 8 9 2 4 7

Explanation:

Rotate 1: 4 -> 7 -> 8 -> 9 -> 2

Rotate 2: 7 -> 8 -> 9 -> 2 -> 4

Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

Example 2:

Input:

N = 8

value[] = {1, 2, 3, 4, 5, 6, 7, 8}

k = 4

Output: 5 6 7 8 1 2 3 4

Expected Time Complexity: O(N). 

Expected Auxiliary Space: O(1).

Constraints: 1 <= N <= 103 1 <= k <= N

<h2>Solution:</h2>

![image](https://user-images.githubusercontent.com/46132450/225247963-94eff4d8-a9a2-45a4-889d-15ce15ea0249.png)
