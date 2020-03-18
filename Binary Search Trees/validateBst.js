class BST {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}


const validateBst = (tree) => {
    return validateBstHelper(tree, -Infinity, Infinity)
}

const validateBstHelper = (tree, minValue, maxValue) => {
    if (!tree) {
        return true
    }
    if (tree.value < minValue || tree.value >= maxValue) {
        return false
    }
    const isLeftValid = validateBstHelper(tree.left, minValue, tree.value)
    const isRightValid = validateBstHelper(tree.right, tree.value, maxValue)
    return isLeftValid && isRightValid
}