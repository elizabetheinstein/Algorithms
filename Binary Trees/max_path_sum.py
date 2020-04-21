def max_path_sum(tree):
    _, max_sum = find_sum(tree)
    return max_sum

def find_sum(node):
    if not node:
        return (0,0)
    
    left_max_branch, left_max_path = find_sum(node.left)
    right_max_branch, right_max_path = find_sum(node.right)
    max_child_branch = max(left_max_branch, right_max_branch)

    value = node.value
    max_branch = max(max_child_branch + value, value)
    max_at_root = max(left_max_branch + value + right_max_branch, max_branch)
    max_path = max(left_max_path, right_max_path, max_at_root)

    return (max_branch, max_path)
