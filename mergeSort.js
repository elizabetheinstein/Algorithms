const mergeSort = (array) => {
    if (array.length < 2) {
		return array
    }
	let halfway = Math.floor(array.length / 2)
	
	let leftArr = array.slice(0, halfway)
	let rightArr = array.slice(halfway)
	
	return mergeSortHelper(mergeSort(leftArr), mergeSort(rightArr))
}

const mergeSortHelper = (left, right) => {
    let leftLen = left.length
	let rightLen = right.length
	let l = 0
	let r = 0
	let s = 0
	
	const sortedArr = new Array(leftLen + rightLen)
	
	while (l < leftLen && r < rightLen) {
		if (left[l] <= right[r]) {
			sortedArr[s++] = left[l++]
		} else {
			sortedArr[s++] = right[r++]
		}
    }
    while (l < leftLen) {
        sortedArr[s++] = left[l++]
    }
    while (r < rightLen) {
        sortedArr[s++] = right[r++]
    }
	return sortedArr
}