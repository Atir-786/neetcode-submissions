class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
          const map = new Map();
        for(let i = 0 ;i<strs.length ; i++){
            const arr = new Array(26).fill(0)
         for(let j = 0 ; j < strs[i].length ; j++)  {
            let index =strs[i][j].charCodeAt(0) - "a".charCodeAt(0)
            arr[index]++;
         }
         if(map.has(arr.join(","))){
            const val = map.get(arr.join(","))
map.set(arr.join(","),[...val,strs[i]])
         }
         else map.set(arr.join(","),[strs[i]])
    }
return Array.from(map.values())
    
}
}