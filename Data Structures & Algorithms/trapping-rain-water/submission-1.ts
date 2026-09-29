class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let prefix = [];
        let preMax=height[0]
        //prefix
        for(let i = 0 ; i<height.length ;i++){
         
         if(preMax<height[i])preMax=height[i];
         prefix[i]=preMax
         }
         // suffix
          let suffix = [];
        let sufMax=height[height.length-1]
        //suffix
        for(let i = height.length-1 ; i>=0 ;i--){
       
         if(sufMax<height[i])sufMax=height[i];
         suffix[i]=sufMax
         }
let total=0;
         for(let i = 0 ;i < height.length ;i++){
          total=total+Math.min(prefix[i],suffix[i])-height[i]
         }
         return total

    }
}
