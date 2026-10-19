class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let start = 0;
        let end = matrix.length-1;
        while(start<=end){
            let medium = Math.floor((start+end)/2)
if(target<matrix[medium][0]){
end=medium-1
}
else if(target>=matrix[medium][0] && target<=matrix[medium][matrix[medium].length-1]){
    let s = 0;
    let e = matrix[medium].length-1;
    while(s<=e){
        let m = Math.floor((s+e)/2)
        if(target==matrix[medium][m])return true
        if(target<matrix[medium][m])e=m-1
        if(target>matrix[medium][m])s=m+1
    }
    return false
}
else {
    start=medium+1
}
        }
        return false
    }
}
