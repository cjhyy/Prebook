# LeetCode 解题报告 4. Median of Two Sorted Arrays

#### 题目描述

There are two sorted arrays **nums1** and **nums2** of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume **nums1** and **nums2** cannot be both empty.

**Example 1:**

```
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
```

**Example 2:**

```
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
```

#### 解题思路

第一眼看到这个题的思路就是归并排序。但是时间复杂度要求O(log(m+n))，所以第二时间思考肯定是二分查找。任何需要遍历的算法都不行。先设置max,min2个变量。max=Math.max(nums1[nums1.length-1],nums2[nums2.length-1]).min=Math.min(nums1[0],nums2[0])。然后开始2分。每次mid=(max+min)/2。然后用mid对2个数组进行2分查找。如果2个数组小于mid的值大于2个数组大于mid的值便更新mid。mid=(min+mid)/2.同时对max和min也要进行更新。

#### 解题代码(javascript)（归并排序版）

```javascript
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length === 0) {        
        return calculateMedian(nums2);
    }  
    if(nums2.length === 0) {
        return calculateMedian(nums1);
    }  
    let mergedArray = [];
    let mergedArrayLength = nums1.length + nums2.length;
    //We need to merge only until the median point of the new merged Array
    let medianLimit = mergedArrayLength % 2 === 0 ? (mergedArrayLength/2 + 1) : (mergedArrayLength + 1)/2;
    let n1Count = 0, n2Count = 0; 
    while(mergedArray.length < medianLimit) {
        if(n1Count >= nums1.length) {
            mergedArray.push(nums2[n2Count]);
            n2Count++;
            continue;
        }
        
        if(n2Count >= nums2.length) {
            mergedArray.push(nums1[n1Count]);
            n1Count++;
            continue;
        }
        
        if(nums1[n1Count] <= nums2[n2Count]) {            
            mergedArray.push(nums1[n1Count]);
            n1Count++;            
        } else {            
            mergedArray.push(nums2[n2Count]);
            n2Count++;
        }
    }

    if(mergedArrayLength % 2 === 0) {
        return (mergedArray[medianLimit-1] + mergedArray[medianLimit-2])/2;
    } else {
        return mergedArray[medianLimit-1];
    }
};

var calculateMedian = function(arr) {
    return arr.length % 2 === 0 
        ? (arr[arr.length/2 - 1] + arr[arr.length/2])/2 
        :  arr[(arr.length + 1)/2 - 1];
}
```

#### 优化思路

暂无