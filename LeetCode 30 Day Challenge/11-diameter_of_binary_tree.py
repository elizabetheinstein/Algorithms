class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution(object):
    def diameterOfBinaryTree(self, root):
        self.diameter = 0
        
        self.dfs(root)
        
        return self.diameter
    
    def dfs(self, node):
        if not node:
            return 0
        
        left = self.dfs(node.left)
        right = self.dfs(node.right)
        
        self.diameter = max(left + right, self.diameter)
        return 1 + max(left, right)