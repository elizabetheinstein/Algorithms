def branch_sums(root):
    sums = []
    calculate_sums(root, 0, sums)
    return sums

def calculate_sums(node, total, sums):
    if not node:
        return
    
    newSum = total + node.value
    if not node.left and not node.right:
        sums.append(newSum)
        return
    calculate_sums(node.left, newSum, sums)
    calculate_sums(node.right, newSum, sums)

