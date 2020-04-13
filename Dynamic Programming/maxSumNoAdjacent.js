const maxSubsetSumNoAdjacent = (array) => {
	if (!array.length) return 0
	if (array.length === 1) return array[0]
	
	let pointer = array[0]
    let sum = Math.max(array[0], array[1])
	
	for (let i = 2; i < array.length; i++) {
		let current = Math.max(sum, pointer + array[i])
		pointer = sum
		sum = current
	}
	return sum
}