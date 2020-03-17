const inOrderTraversal = (tree, array) => {
    if (tree) {
        inOrderTraversal(tree.left, array)
        array.push(tree.value)
        inOrderTraversal(tree.right, array)
    }
    return array
}

const preOrderTraversal = (tree, array) => {
    if (tree) {
        array.push(tree.value)
        preOrderTraversal(tree.left, array)
        preOrderTraversal(tree.right, array)
    }
    return array
}

const postOrderTraversal = (tree, array) => {
    if (tree) {
        postOrderTraversal(tree.left, array)
        postOrderTraversal(tree.right, array)
        array.push(tree.value)
    }
    return array
}