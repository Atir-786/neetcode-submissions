class MinStack {
         arr:number[];
         arr2:number[];
         min:number;
    constructor() {
        this.arr=[];
        this.arr2=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.arr.push(val);
        if(this.arr2.length==0)this.arr2.push(val)
        else{
            this.arr2.push(Math.min(val,this.arr2[this.arr2.length-1]))
        }
        // if(!this.min)this.min=val;
        // if(this.min>val)this.min=val
    }

    /**
     * @return {void}
     */
    pop(): void {
      this.arr.pop();
      this.arr2.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.arr.length-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        // if(arr2.)
return this.arr2[this.arr2.length-1];
// return 2
    }
}
