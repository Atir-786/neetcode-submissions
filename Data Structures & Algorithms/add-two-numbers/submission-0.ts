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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let start  = l1;
        let carry = 0 ;
        let dummy=new ListNode();
       let current=dummy;
        while(l1!==null || l2!==null || carry!==0){
          let val1 = l1 !== null ? l1.val : 0;
let val2 = l2 !== null ? l2.val : 0;
        let sum = val1 + val2 + carry;
let rem = sum%10;
 carry = Math.floor(sum/10);
        let next  = new ListNode(rem);
        current.next=next;
        l1=l1?l1.next:null;
        l2=l2?l2.next:null;
        current=current.next
        }
        return dummy.next
    }
}
