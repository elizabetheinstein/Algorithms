def find_closest_value_in_BST(tree, target):
    return find_closest_helper(tree, target, float("inf"))

def find_closest_helper(tree, target, closest):
    if tree is None:
        return closest
    
    if abs(tree.value - target) < abs(closest - target):
        closest = tree.value
    
    if tree.value > target:
        return find_closest_helper(tree.left, target, closest)
    elif tree.value < target:
        return find_closest_helper(tree.right, target, closest)
    else:
        return closest