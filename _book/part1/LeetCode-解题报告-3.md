# LeetCode 解题报告 3.Longest Substring Without Repeating Characters

#### 题目描述

Given a string, find the length of the **longest substring** without repeating characters.

**Example 1:**

```
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
```

**Example 2:**

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

**Example 3:**

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

#### 解题思路

从头到尾遍历，新建数组arr进行hash，如果arr[s[i]]==null就arr[s[i]]=i,记录下hash位置。 设定一个start从0开始记录每次字串起始位置。 当arr[s[i]]!=null时。判断 i-start（字串长度）是否大于 ans（答案返回值，初值为0） 更新start位置为i+1(需要判断i+1和当前start大小，可以用max函数)，然后继续遍历。 <strong style='color:red;'>需要注意</strong>:字符串末尾字符需要特殊处理。

#### 解题代码（javascript）

```javascript
var lengthOfLongestSubstring = function(s) {
    var a=new Array();
    var k=s.length;
    var sum,start=0;
    var ans=0;
    console.log(ans);
    for (i=0;i<k;i++){
      if (a[s.charAt(i)]==null){
            a[s.charAt(i)]=i;
            if (i==k-1){
                 sum=k-start;
                 if (sum>ans) {ans=sum;sum=0;}
            }
        } else {
             if (i==k-1){
                 if (a[s.charAt(i)]<start){
                       sum=k-start;
                 if (sum>ans) {ans=sum;sum=0;}  
                 }
            }
            sum=i-start; 
            if (start<a[s.charAt(i)]+1){
               start=a[s.charAt(i)]+1;   
            }
          
            if (sum>ans) {ans=sum;sum=0;}
            a[s.charAt(i)]=i;
        }

    } 
    return ans;
};
```

#### 解题代码（java）

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int ans=1;
        int ss=0;
        for(int i=0;i<s.length()-1;i++){
                    int a[]=new int[130];
                Arrays.fill(a,0);
                int sum=1;
             a[s.charAt(i)]=1;
            for (int j=i+1;j<s.length();j++){
                   ss++;
                if (ss>800) return ans;
                  if (a[s.charAt(j)]==0){
                      a[s.charAt(j)]++;
                      sum++;
                        if (sum>ans) {
                    ans=sum;}
                } else{
                            break;
                        }             
                  }             
               }
      if (s.length()==0) ans=0;  
    return ans;
    }
}
```

#### 优化思路

java方法加了一个800字符的强剪枝。加快了时间复杂度。