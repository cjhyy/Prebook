# LeetCode 解题报告 7. Reverse Integer

#### 题目描述

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**

```
Input: 123
Output: 321
```

**Example 2:**

```
Input: -123
Output: -321
```

**Example 3:**

```
Input: 120
Output: 21
```

**Note:**
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

#### 解题思路

#### 解题代码（javascript）

```javascript
var reverse = function(x) {
    var i=1;
    if (x<0) i=-1;
    x=x*i;
    var s=String(x);
    console.log(s);
 var ss=s.split("").reverse().join("");
   var j=0;
    for (j; j < s.length; j++) {
        if (ss[j] !== '0') {
            break;
        }
    }
    var r =  i * parseInt(ss.substring(j, ss.length)); 
      if (ss=="0") r=0;
    if (r > 2 ** 31 || r < -1 * 2 ** 31) r=0;
    console.log(j,r,ss.length,ss);
    return ss=="0"?0:r;
};
```

#### 优化思路

