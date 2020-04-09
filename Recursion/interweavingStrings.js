//brute force solution
const interweavingStrings = (one, two, three) => {
	if (one.length + two.length !== three.length) return false
    return interweaveHelper(one, two, three, 0, 0)
}

const interweaveHelper = (one, two, three, idx1, idx2) => {
	const idx3 = idx1 + idx2
	if (idx3 === three.length) return true
	if (one[idx1] === three[idx3] && idx1 < one.length) {
		if (interweaveHelper(one, two, three, idx1 + 1, idx2)) return true
	}
	if (two[idx2] === three[idx3] && idx2 < two.length) {
		return interweaveHelper(one, two, three, idx1, idx2 + 1)
	}
	return false
}

//memoize solution
const interweaveStrings = (one, two, three) => {
    if (one.length + two.length !== three.length) return false
    let cache = new Array(one.length + 1).fill(0).map(_ => new Array(two.length + 1). fill(null))
    return interweaveHelper1(one, two, three, 0, 0, cache)
}

const interweaveHelper1 = (one, two, three, idx1, idx2, cache) => {
    if (cache[idx1][idx2] !== null) return cache[idx1][idx2]
    const idx3 = idx1 + idx2
    if (idx3 === three.length) return true
    if (one[idx1] === three[idx3] && idx1 < one.length) {
        cache[idx1][idx2] = interweaveHelper1(one, two, three, idx1 + 1, idx2, cache)
        if (cache[idx1][idx2]) return true
	}
	if (two[idx2] === three[idx3] && idx2 < two.length) {
        cache[idx1][idx2] = interweaveHelper1(one, two, three, idx1, idx2 + 1, cache)
        return cache[idx1][idx2]
    }
    cache[idx1][idx2] = false
	return false
}