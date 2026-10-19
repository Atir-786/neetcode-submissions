class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let start = 0 ;
        let end = nums.length-1;
        while(start<end){
            let med = Math.floor((start+end)/2)
            if(nums[med]>nums[end]) {
                start=med+1
            }
           else end=med;

        }
        return nums[start]
    }
}
