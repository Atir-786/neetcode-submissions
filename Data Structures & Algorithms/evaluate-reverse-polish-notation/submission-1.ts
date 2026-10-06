class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        function evaluate(o,a,b){
          if(o=='+') return  a+b;
          if(o=='-') return  a-b;
          if(o=='/') return  Math.trunc(a/b);
          if(o=='*') return  a*b;
        }
        let set = new Set(['+','-','/','*'])
        let array = [];
        let cur = 0 ;
        for(let i = 0 ; i<tokens.length ;i++){
            if(set.has(tokens[i])){
let num1 = array.pop()
let num2 = array.pop()
let result  = evaluate(tokens[i],num2,num1);
array.push(result)
            }
            else{
array.push(Number(tokens[i]))
            }
        }
        return array[array.length-1];
    }
}
