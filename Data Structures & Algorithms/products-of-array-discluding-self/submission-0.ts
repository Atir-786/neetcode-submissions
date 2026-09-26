class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

         let pre=[];
        let suf=[];
        for(let i = 0 ; i <nums.length ; i++){
           if(i==0) {
            pre[i]=1 ;
           continue;
           }
           if(i==1) {pre[i]=nums[0]
           continue;
           }

           pre[i]=pre[i-1]*nums[i-1]
        }

         for(let i = nums.length-1 ; i >=0; i--){
           if(i==nums.length-1) {suf[i]=1
           continue;
           };
           if(i==nums.length-2) {suf[i]=nums[i+1]
           continue;
           }

           suf[i]=suf[i+1]*nums[i+1]
        }

        for(let i = 0 ; i < nums.length;i++){
nums[i]=suf[i]*pre[i]
        }
        return nums
    }
}
