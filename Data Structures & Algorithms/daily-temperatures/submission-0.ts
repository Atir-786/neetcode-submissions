class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
let stack = [];
let arr = new Array(temperatures.length).fill(0);
for(let i= 0 ; i < temperatures.length;i++){
if(i==0){
    stack.push(i);
    continue;
}
while(stack.length>0&&temperatures[stack[stack.length-1]] < temperatures[i] ){
    let num = stack.pop()
    arr[num]=(i-num);
}
 stack.push(i);

}
return arr;

    }
}
