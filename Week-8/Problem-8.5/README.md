<h2>Problem 8.5: Next Greater ELement</h2>

Given an array arr{} of size N having distinct elements, the task is to find the next

greater element for each element of the array in order of their appearance in the array.

Next greater element of an element in the array is the nearest element on the right

which is greater than the current element. If there does not exist next greater of current

element, then next greater element for current element is -1. For example, next greater

of the last element is always -1.

Example 1:

Input: N = 4, 

arr[] = [1 3 2 4]

Output: 3 4 4 -1

Explanation: In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.

Example 2:

Input: N = 5, 

arr[] [6 8 0 1 3]

Output: 8 -1 1 3 -1

Explanation: In the array, the next larger element to 6 is 8, for 8 there is no larger elements hence it is -1, for 0 it is 1 ,

for 1 it is 3 and then for 3 there is no larger element on right and hence -1.

Expected Time Complexity : O(N) 

Expected Auxilliary Space : O(N)

Constraints: 1 ≤ N ≤ 106 1 ≤ Ai ≤ 1018

<h2>Solution:</h2>

![image](https://user-images.githubusercontent.com/46132450/225585511-fa420451-08f1-411c-ab8b-c50a1ae780cc.png)
