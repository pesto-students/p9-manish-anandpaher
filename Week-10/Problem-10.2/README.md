<h2>Problem 10.2 : Validate a Binary Tree</h2>

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key. 

The right subtree of a node contains only nodes with keys greater than the node's key. 

Both the left and right subtrees must also be binary search trees.

Example 1:

![image](https://user-images.githubusercontent.com/46132450/230533569-0a57ac66-c2dd-4024-b20b-3ebe8e8fb9ae.png)

Input: root = [2,1,3]

Output: true

Example 2:

![image](https://user-images.githubusercontent.com/46132450/230533615-d0fb25c5-40a3-43b7-9fef-b9d4db67207c.png)

Input: root = [5,1,4,null,null,3,6]

Output: false

Explanation: The root node's value is 5 but its right child's value is 4.

Constraints:

●The number of nodes in the tree is in the range [1, 104].

●231<= Node.val <= 231- 1
