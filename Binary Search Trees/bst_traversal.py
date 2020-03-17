def in_order_traversal(tree, array):
    if tree:
        in_order_traversal(tree.left, array)
        array.append(tree.value)
        in_order_traversal(tree.right, array)
    return array

def pre_order_traversal(tree, array):
    if tree:
        array.append(tree.value)
        pre_order_traversal(tree.left, array)
        pre_order_traversal(tree.right, array)
    return array

def post_order_traversal(tree, array):
    if tree:
        post_order_traversal(tree.left, array)
        post_order_traversal(tree.right, array)
        array.append(tree.value)
    return array