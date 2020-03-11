const moveElementToEnd = (array, toMove) => {
	let left = 0
	let right = array.length - 1 
	while (left < right) {
		let current = array[left]
		if (current === toMove && array[right] !== toMove) {
			array[left] = array[right]
			array[right] = current
			left++
			right--
		} else if (current === toMove && array[right] === toMove) {
			right--
		} else if (current !== toMove) {
			left++
		}
	}
  return array
}
