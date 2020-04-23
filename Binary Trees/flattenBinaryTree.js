class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const flattenBinaryTree = (root) => {
    const inOrder = inOrderTraversal(root, []);
    for (let i = 0; i < inOrder.length - 1; i++) {
        const left = inOrder[i]
        const right = inOrder[i + 1]
        left.right = right
        right.left = left
    }
    return inOrder[0];
}

const inOrderTraversal = (tree, array) => {
    if (tree !== null) {
        inOrderTraversal(tree.left, array)
        array.push(tree)
        inOrderTraversal(tree.right, array)
    }
    return array;
}