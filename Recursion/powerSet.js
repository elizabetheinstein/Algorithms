//recursive solution
const powerSet = (array, idx = null) => {
    if (idx === null) idx = array.length - 1
    if (idx < 0) return [[]]

    const element = array[idx]
    const subsets = powerSet(array, idx - 1)
    const length = subsets.length
    for (let i = 0; i < length; i++) {
        const current = subsets[i]
        subsets.push(current.concat(element))
    }
    return subsets
}

//iterative solution

const powerSet1 = (array) => {
    let powerArr = [[]]
	for (const element of array) {
		let powerLen = powerArr.length
		for (let i = 0; i < powerLen; i++) {
			powerArr.push(powerArr[i].concat(element))
		}
	}
	return powerArr
}