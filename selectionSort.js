const selectionSort = (array) => {
	let idx = 0
	while (idx < array.length - 1) {
		let lowest = idx
		for (let i = idx + 1; i < array.length; i++) {
			if (array[lowest] > array[i]) {
				lowest = i
			}
		}
		let temp = array[lowest]
		array[lowest] = array[idx]
		array[idx] = temp
	    idx++
    }
	return array
}