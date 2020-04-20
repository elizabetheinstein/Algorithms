class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

const branchSums = (root) => {
    const sums = []
	calculateSums(root, 0, sums)
	return sums
}

const calculateSums = (node, total, sums) => {
	if (!node) return
	
	const newSum = total + node.value
	if (!node.left && !node.right) {
		sums.push(newSum)
		return
	}
	calculateSums(node.left, newSum, sums)
	calculateSums(node.right, newSum, sums)
}
}