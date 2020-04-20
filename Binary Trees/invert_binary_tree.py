# recursive solution
def invert_binary_tree(tree):
    return invert_helper(tree)

def invert_helper(node):
    if not node:
        return
    swapNodes(node)
    if node.left:
        invert_helper(node.left)
    if node.right:
        invert_helper(node.right)
    return node

#iterative solution
def invert_binary_tree1(tree):
    queue = [tree]
    while len(queue):
        current = queue.pop(0)
        if current is None:
            continue
        swapNodes(current)
        queue.append(current.left)
        queue.append(current.right)

def swapNodes(node):
	node.left, node.right = node.right, node.left