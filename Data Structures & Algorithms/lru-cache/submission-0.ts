class ListNode{
    val;
    key;
    next:ListNode;
    prev:ListNode;
    constructor(val=0,key=0,next=null,prev=null){
        this.val=val;
        this.next=next;
        this.prev=prev;
        this.key=key;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    capacity:number;
     map:Map<number,ListNode>;
      head:ListNode;
     tail:ListNode;
    constructor(capacity: number) {
        this.capacity=capacity;
this.map=new Map();
this.head = new ListNode()
this.tail = new ListNode()

this.head.next=this.tail;
this.tail.prev=this.head;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    
    get(key: number): number {
if(this.map.has(key)){
const node = this.map.get(key)!;
let prev = node.prev;
let next = node.next;
prev.next=next;
next.prev=prev;
let lastNode = this.tail.prev;
lastNode.next=node;
node.prev=lastNode;
node.next=this.tail;
this.tail.prev=node
return node.val;
}
return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        let node = this.map.get(key);
        if(node){
            node.val=value
            this.map.set(key,node);
          
            let prev = node.prev;
let next = node.next;
prev.next=next;
next.prev=prev;
let lastNode = this.tail.prev;
lastNode.next=node;
node.prev=lastNode;
node.next=this.tail;
this.tail.prev=node

        }
        else{
            let newNode = new ListNode(value,key)
this.map.set(key,newNode);

let lastNode = this.tail.prev;
lastNode.next=newNode;
newNode.prev=lastNode;
newNode.next=this.tail;
this.tail.prev=newNode;
  if(this.capacity<this.map.size){
                const fNode = this.head.next
                const next=fNode.next;
                this.head.next=next;
                next.prev=this.head;
    this.map.delete(fNode.key)
            }
        }
    }
}
