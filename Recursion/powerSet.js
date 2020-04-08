const powerSet = (array) => {
    let powerArr = [[]]
	for (const element of array) {
		let powerLen = powerArr.length
		for (let i = 0; i < powerLen; i++) {
			powerArr.push(powerArr[i].concat(element))
		}
	}
	return powerArr
}