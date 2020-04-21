const maxPathSum = tree => {
    const [_, maxSum] = [...findSums(tree)]
	return maxSum
}

const findSums = (node) => {
	if (node === null) return [0,0]
	
	const [leftMaxBranch, leftMaxPath] = findSums(node.left)
	const [rightMaxBranch, rightMaxPath] = findSums(node.right)
	const maxChildBranch = Math.max(leftMaxBranch, rightMaxBranch)
	
	const {value} = node
	const maxBranch = Math.max(maxChildBranch + value, value)
	const maxAtRoot = Math.max(leftMaxBranch + value + rightMaxBranch, maxBranch)
	const maxPath = Math.max(maxAtRoot, leftMaxPath, rightMaxPath)
	
	return [maxBranch, maxPath]
}