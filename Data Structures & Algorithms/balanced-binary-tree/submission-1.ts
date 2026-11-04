/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if(!root)return true;

        function dfs(root:TreeNode|null){
        if(!root)return 0;
let left = dfs(root.left)
if(left==-1)return-1
let right = dfs(root.right)
if(right==-1)return-1
if(Math.abs(left - right) > 1){
return -1
};

return 1 + Math.max(left,right)
        }
      let result =  dfs(root)
        return result!=-1;
    }
}
