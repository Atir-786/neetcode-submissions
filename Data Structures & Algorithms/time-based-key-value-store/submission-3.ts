class TimeMap {
    keyStore;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if(this.keyStore.has(key)){
           this.keyStore.set(key,[
            ...this.keyStore.get(key),
           {value,timestamp}
           ])
        }
       else this.keyStore.set(key,[{value,timestamp}])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
       if (this.keyStore.has(key)){
let arr = this.keyStore.get(key);
let start = 0;
let end=arr.length-1;
let min;
while(start<=end){
    let med = Math.floor((start+end)/2)
    if(arr[med].timestamp==timestamp)return arr[med].value;
    if(arr[med].timestamp<timestamp){ 
        start=med+1;
        min=arr[med].value
        }
    else end = med - 1;
}
return min?min:''
       }
       else return ''
    }
}
