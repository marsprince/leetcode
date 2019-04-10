/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (45.99%)
 * Total Accepted:    546.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) return l2;
    if(l2=== null) return l1;
    let pos = new ListNode();
    let newlist = pos;
    while(l1 && l2) {
        if(l1.val<=l2.val) {
            pos.next = new ListNode(l1.val);
            l1 = l1.next
        } else {
            pos.next = new ListNode(l2.val);
            l2 = l2.next
        }
        pos = pos.next
    }
    pos.next = l1?l1:l2;
    return newlist.next
};

