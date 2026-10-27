// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if(head==null)return head;
        let start = head;
        let map = new Map();
        while(start!==null){
            let copy = new Node(start.val);
            map.set(start,copy);
            start=start.next;

        }
        let org = head;
        while(org!==null){
let copy = map.get(org);
let next =  map.get(org.next)?map.get(org.next):null
let random =  map.get(org.random)?map.get(org.random):null
copy.next=next;
copy.random=random;
org=org.next;
        }
        return map.get(head)
    }
}
