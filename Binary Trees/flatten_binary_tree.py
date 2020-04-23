class Binary_Tree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def flatten_binary_tree(tree):
    in_order = in_order_traversal(tree, [])
    for i in range(len(in_order) - 1):
        left = in_order[i]
        right = in_order[i + 1]
        left.right = right
        right.left = left
    return in_order[0]


def in_order_traversal(tree, array):
    if tree != None:
        in_order_traversal(tree.left, array)
        array.push(tree)
        in_order_traversal(tree.right, array)
    return array
