// Find sum of two number and return indices
// https://leetcode.com/problems/two-sum/
const twoNumberSum1 = (nums, targetSum) => {
    const map = {}
    const numLen = nums.length
	for (let i = 0; i < numLen; i++) {
		const complement = targetSum - nums[i]
		if (complement in map) {
            return [map[complement], i]
        }
        map[nums[i]] = i
	}
}

// Find sum of two number and array of two numbers or empty array
//https://www.algoexpert.io/questions/Two%20Number%20Sum
const twoNumberSum2 = (array, target) => {
    const map = new Map(), 
				numLen = array.length
	for (let i = 0; i < numLen; i++) {
		const complement = targetSum - array[i]
		if (map.has(complement)) {
      return [complement, array[i]]
    }
    map.set(array[i], i)
	}
	return []
}