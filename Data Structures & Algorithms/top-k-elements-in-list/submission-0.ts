class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map()
        for(let i = 0 ; i <nums.length ;i++){
if(map.has(nums[i])){
    let count = map.get(nums[i]) + 1
    map.set(nums[i],count)
}
else map.set(nums[i],1)
        }
let arr=[];
for (const [key,value] of map){
if(arr[value]){
    arr[value]=[...arr[value],key]
}
else arr[value]=[key]

}
let arr2 = [];
for(let i = arr.length-1 ; i>=0 ; i--){
    if(!arr[i])continue;
    for(let j = 0 ; j < arr[i].length ; j++){
        if(arr2.length==k) return arr2
arr2.push(arr[i][j])
    }
}
return arr2

    }
}
