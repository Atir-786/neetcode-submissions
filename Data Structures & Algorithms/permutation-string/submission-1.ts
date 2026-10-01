class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
   
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length>s2.length)return false;
         function compare (s1Freq,window):boolean{
for(let i = 0 ;i<26;i++){
    if(s1Freq[i]==window[i]) continue;
    else return false
}
return true
    };
        let arrFreq = new Array(26).fill(0);
        for(let i = 0 ; i <s1.length ;i++){
            let charcode = s1[i].charCodeAt(0)-"a".charCodeAt(0)
            arrFreq[charcode]++;
        }

        let l = 0 ; 
        let r = s1.length-1;
        let window = new Array(26).fill(0)
        for(let i = 0 ; i < s1.length ;i++){
            let charcode = s2[i].charCodeAt(0)-"a".charCodeAt(0);
            window[charcode]++;
        }
        for(;r<s2.length;){
let result = compare(arrFreq,window)
if(result)return true;
if(r==s2.length-1)return false
let charL = s2[l].charCodeAt(0) - "a".charCodeAt(0)
window[charL]--;
let charR = s2[r+1].charCodeAt(0) - "a".charCodeAt(0)
window[charR]++;
l++;
r++;
        }
        return false
    }
        
}
