// recursive solution
const invertBinaryTree = (tree) => {
    return invertHelper(tree)
}
  
const invertHelper = (node) => {
    if (!node) return
    swapNodes(node)
    if (node.left) invertHelper(node.left)
    if (node.right) invertHelper(node.right)
    
    return node
}

//iterative solution
const invertBinaryTree1 = (tree) => {
    const queue = [tree]
    if (!tree) return
    while (queue.length) {
        const current = queue.shift()
        if (current === null) continue
        swapNodes(current)
        queue.push(current.left)
        queue.push(current.right)
    }
    return tree
}

const swapNodes = (node) => {
    [node.left, node.right] = [node.right, node.left]
}