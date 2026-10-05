class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let map = new Map<string,string>();
        map.set('(',')')
        map.set('{','}')
        map.set('[',']')

    let arr = [];

    for(let i = 0 ; i<s.length ;i++){
        if(arr[arr.length-1]==s[i])arr.pop();
        else{
        arr.push(map.get(s[i]))
        }
    }
return arr.length==0
    }
}
