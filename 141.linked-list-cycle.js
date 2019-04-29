/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slowPointer  = head;
    let fastPointer  = head;
	while(fastPointer != null && fastPointer.next != null){
		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next.next;
		
		//两指针相遇则有环
		if(slowPointer == fastPointer){
			return true;
		}
	}
	return false;
};

