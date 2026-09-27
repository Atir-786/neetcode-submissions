class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let j = s.length-1;
        // let str = s.replaceAll(" ","")
        const regex = /[a-z0-9]/i
        for(let i = 0 ; i < j ;){
            if(s[i]==" " || !regex.test(s[i])) {i++;continue} ;
            if(s[j]==" "|| !regex.test(s[j])){j--;continue;}
if(s[i].toLowerCase()!=s[j].toLowerCase()) return false;
j--;
i++;
        }
        return true
    }
}
