class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let k = 0 ;
        let j = nums.length-1;
        let arr=[];
        nums.sort((a,b)=>a-b)
        for(let i = 0 ; i < nums.length ;i++){
            if(nums[i]==nums[i-1])continue;
             k=i+1;
             j = nums.length-1;
while(k<j){
   

    if(nums[k]+nums[j]>-nums[i]){
j--;
continue;
    }
     if(nums[k]+nums[j]<-nums[i]){
k++;
continue;
    }

arr.push([nums[i],nums[j],nums[k]])
j--;
k++;
 while (k < j && nums[k] === nums[k - 1]) {
  k++;
}

while (k < j && nums[j] === nums[j + 1]) {
  j--;
}
}
        }
        return arr;
    }
}
  