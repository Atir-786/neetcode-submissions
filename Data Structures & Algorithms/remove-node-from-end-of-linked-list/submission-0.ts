//  * Definition for singly-linked list.
//   class ListNode {
//     val;
//     next;
//       constructor(val = 0, next = null) {
//           this.val = val;
//           this.next = next;
//       }
//   }

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        if(head==null)return head;
        let p1 = head;
        let dummy=new ListNode()
        dummy.next=head;
        let p2 = dummy;
        let i=0;
        while(i<n){
p1=p1.next;
i++;
        }
        while(p1!=null){
            p1=p1.next;
            p2=p2.next
        }
        let before=p2;
        let target = p2.next;
        let after = target.next;
        before.next=after;
    return dummy.next;
    }
}
