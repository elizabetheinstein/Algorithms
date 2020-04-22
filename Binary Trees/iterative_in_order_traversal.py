def iterative_in_order_traversal(tree, callback):
    if not tree:
        return
    prev = None
    current = tree
    next = None

    while current != None:
        if prev == None or prev == current.parent:
            if current.left:
                next = current.left
            else:
                callback(current)
                next = current.right if current.right != None else current.parent
        elif prev == current.left:
            callback(current)
            next = current.right if current.right != None else current.parent
        else:
            next = current.parent
        prev = current
        current = next