const smallestDifference = (arrayOne, arrayTwo) => {
	arrayOne.sort((a, b) => a - b)
	arrayTwo.sort((a, b) => a - b)
	let one = 0
	let two = 0
	let smallest = Infinity
	let current = Infinity
	let smallestPair = []
	while (one < arrayOne.length && two < arrayTwo.length) {
		let firstNum = arrayOne[one]
		let secondNum = arrayTwo[two]
		if (firstNum < secondNum) {
			current = secondNum - firstNum
			one++
		} else if (secondNum < firstNum) {
			current = firstNum - secondNum
			two++
		} else {
			return [firstNum, secondNum]
		}
		if (smallest > current) {
			smallest = current
			smallestPair = [firstNum, secondNum]
		}
	}
	return smallestPair
}