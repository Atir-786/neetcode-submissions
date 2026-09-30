class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let result =0;
        let l = 0;
        let r = 0;
        let set = new Set()
        for(; r<s.length;){
if(set.has(s[r])){
set.delete(s[l]);
l++;
}
else{
    set.add(s[r]);
    if(r-l+1>result){
    result=r-l+1
}
r++;
}

        }
        return result
}
}