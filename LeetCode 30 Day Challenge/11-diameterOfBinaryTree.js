class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const diameterOfBinaryTree = (root) => {
    let diameter = 0
    dfs(root)
    
    return diameter   
}

const dfs = (node) => {
    if (!node) return 0
    
    let left = dfs(node.left)
    let right = dfs(node.right)
    
    diameter = Math.max(left + right, diameter)
    
    return 1 + Math.max(left, right)
}