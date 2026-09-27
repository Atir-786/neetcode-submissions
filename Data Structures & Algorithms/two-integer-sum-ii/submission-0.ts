class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let j = numbers.length-1
        for(let i =0 ; i < j ;){
if(numbers[i]+numbers[j]>target){
    j--;
    continue
}
if(numbers[i]+numbers[j]<target){
    i++;
    continue;
}
return [i+1,j+1]
        }
    }
}
