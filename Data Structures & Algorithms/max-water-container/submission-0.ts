class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
let j = heights.length-1;
let max = 0 ;

        for(let i = 0 ; i < j ; ){
let area = (j-i)*Math.min(heights[i],heights[j]);
if(max<area)max=area;
if(heights[i]<heights[j]){
i++
}
else j--

        }
        return max
    }
}
