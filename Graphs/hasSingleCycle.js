const hasSingleCycle = (array) => {
    let idx = 0
	let jumps = 0
	let next = 0
	
	while (jumps < array.length) {
		if (idx === 0 && jumps > 1) {
			return false
		}
		next = (array[idx] + idx) % array.length
		if (next > array.length) {
			next %= array.length
		} else if (next < 0) {
			next += array.length
		}
		jumps++
		idx = next
	}
	return idx === 0
}