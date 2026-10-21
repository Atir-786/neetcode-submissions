/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        let slow=head;
        let fast=head;
        let prevSlow=null;
        if(head==null)return;
        while( fast!=null &&fast.next!=null ){
            prevSlow=slow;
            slow=slow.next;
            fast=fast.next.next;
        }
      if (slow == null) return;

let current = slow.next;
slow.next = null;
        let next = null;
         let prev=null;
        while(current!=null){
            next =  current.next;
            current.next=prev;
            prev=current;
            current= next
        }
        let l = head;
       while (l != null && prev != null) {
    let nextL = l.next;
    let nextPrev = prev.next;

    l.next = prev;
    prev.next = nextL;

    l = nextL;
    prev = nextPrev;
}
    }
}
