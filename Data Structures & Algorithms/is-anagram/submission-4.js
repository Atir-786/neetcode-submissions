class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length)return false
         let sMap = new Map();
    let tMap = new Map();
for (let i = 0 ;i < s.length ; i++){
    if(sMap.has(s[i])){
        const value = sMap.get(s[i])+1
        sMap.set(s[i],value);
    }
  else sMap.set(s[i],1);
}
for (let i = 0 ;i < t.length ; i++){
    if(tMap.has(t[i])){
        const value = tMap.get(t[i])+1

                tMap.set(t[i],value);

    }
 else tMap.set(t[i],1);
}
for(const [key] of sMap){
if(tMap.has(key) && sMap.get(key)==tMap.get(key)){
continue;
}
return false
}
return true
    }
}
