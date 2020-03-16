const findClosestValueInBST = (tree, target) => {
    return findClosestHelper(tree, target, Infinity)
}

const findClosestHelper = (tree, target, closestVal) => {
    if (!tree) return closestVal

    if (Math.abs(target - tree.value) < Math.abs(target - closestVal)) {
        closestVal = tree.value
    }
    if (tree.value < target) {
        return findClosestHelper(tree.right, target, closestVal)
    } else if (tree.value > target) {
        return findClosestHelper(tree.left, target, closestVal)
    } else {
        return closestVal
    }
}