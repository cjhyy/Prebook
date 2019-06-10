# LeetCode 解题报告 2. Add Two Numbers

#### 题目描述

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example:**

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

#### 解题思路

有点像大数据加减的细节。也就很简单。直接模拟实现 判断是否进位，最后输出。主要难点在于指针的处理

#### 解题代码(javascript)

```javascript
var addTwoNumbers = function(l1, l2) {
    var head=new ListNode(0);
    let cur=head;
    var sum,add=0;
    while( l1 || l2 || add){
        if (!l1){ v1=0} else v1=l1.val;
         if (!l2) {v2=0} else v2=l2.val;
        sum=v1+v2+add;
        add=Math.floor(sum /10);
        cur.next=new ListNode(sum %10) ;
        cur=cur.next;
        if (l1) l1=l1.next;
        if (l2) l2=l2.next;
    }
    return head.next
};
```



#### 解题代码(java)

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode preHead = new ListNode(0);
        ListNode runner = preHead;
        int carry = 0;
        int val1 = 0;
        int val2 = 0;
        while (l1 != null || l2 != null) {
            if (l1 != null) {
                val1 = l1.val;
                l1 = l1.next;
            } else {
                val1 = 0;
            }
            if (l2 != null) {
                val2 = l2.val;
                l2 = l2.next;
            } else {
                val2 = 0;
            }
            int val = (val1 + val2 + carry) % 10;
            carry = (val1 + val2 + carry) / 10;
            runner.next = new ListNode(val);
            runner = runner.next;
        }
        if (carry == 0) return preHead.next;
        runner.next = new ListNode(carry);
        return preHead.next;
    }
}
```

#### 优化思路

暂无