class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let start = 0;
        let end = nums.length-1
        while(start<=end){
            let med = Math.floor((start+end)/2)
            if(nums[med]==target)return med;
            if(nums[start]<=nums[med] ){
               if(target>=nums[start] && target<=nums[med]){
                 end=med-1
               }
               else start=med+1
            }
            else{
                if(target>=nums[med]&&target<=nums[end]) start=med+1
                else end=med-1
            }
        }
        return -1;
    }
}
