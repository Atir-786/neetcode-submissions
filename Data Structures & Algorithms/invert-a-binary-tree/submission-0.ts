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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if(!root) return null;
        function dfs(node:TreeNode|null){
            if(!node) return;
  let l=node.left
        let r=node.right
        node.left=r;
        node.right=l
     dfs(node.left)
     dfs(node.right)
        }
        dfs(root)
        return root
      
    }
}
