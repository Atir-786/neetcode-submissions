class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let str="";
        for(let i = 0 ; i < strs.length ; i++){
str=str+strs[i].length+"#"+strs[i]
        }
        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str)  {
        let i=0;
        let strs=[];
        let newStr='';
        while(i<str.length){
let num =Number(str.slice(i,Number(str.indexOf("#",i))));
newStr=str.slice(str.indexOf('#',i)+1,(str.indexOf('#',i)+1+num))
strs.push(newStr)
i=(str.indexOf('#',i)+1+num)
        }
        return strs 
    }
}
