# LeetCode 解题报告  two sum

#### 题目描述

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the *same* element twice.

**Example:**

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

#### 解题思路

第一反应就是哈希。从左到右预处理一遍 a[nums[i]]=i。然后再从左往右遍历。

if( a[target-nums[i]] != 0  )  输出 [i,a[target-nums[i] ] ]就OK。

处理状态中会遇到 2个一样的数字 然后不好处理。考虑时间复杂度更高的解法。

直接2次暴力搜索。通过剪枝可以只搜一半。o(n^2)

#### 解题代码（javascript）

```javascript
var twoSum = function(nums, target) {
    for  (var i=0;i<nums.length;i++){
   for ( var j=i+1;j<nums.length;j++){
       if (nums[i]+nums[j]==target){
           return [i,j]
       }
   }
  } 
};
```



#### 优化思路

如果先拍一次序 再通过2分查找。 时间复杂度可以进一步优化到 O(n+n*log<sub>2</sub>n).

