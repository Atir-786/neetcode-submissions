class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i = 0 ; i < nums.length ; i++){
            const num = target-nums[i]
if(map.has(num))return [map.get(num),i];
     map.set(nums[i],i);

        }

        
    }
}
