class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // let arr=[];
        let numSet = new Set (nums);
        let start=[];
      for(let i = 0 ; i < nums.length ;i++){
        if(!numSet.has(nums[i]-1)){
            start.push(nums[i])
        }
      }
      let max = 0
for(let i = 0 ; i<start.length ;i++){
  let arr=[];
  arr[0]=start[i];
  let n = 1;
  while(numSet.has(start[i]+n)){
    arr.push(start[i]+1);
    n++
  }
  if(arr.length>max){
    max=arr.length
  }
}
        return max
    }
}
