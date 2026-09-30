class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
let l = 0;let r = 0;
let map =new Map();
let freqChar=s[0]
let max=1;
let result = 0 ;
for(;r<s.length;){
    if(map.has(s[r])){
        let count = map.get(s[r])+1
        if(count>max)max=count;
        map.set(s[r],count)
    }
    else{
        map.set(s[r],1)
    }
    let rep = r-l+1-max;
    while(rep>k){
        let count = map.get(s[l])
        if(count==1){
            map.delete(s[l])
        }
        else{
            map.set(s[l],count-1)
        }
l++;
        rep = r-l+1-max
    }
    let length = r-l+1;
    if(length>result)result=length;
    r++;
}       
return result

    }
}
