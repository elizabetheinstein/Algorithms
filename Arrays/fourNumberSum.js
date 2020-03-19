const fourNumberSum = (array, targetSum) => {
    const allPairs = {}
    const quadruplets = []

    for (let i = 1; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const currentSum = array[i] + array[j]
            const difference = targetSum - currentSum
            if (difference in allPairs) {
                for (const pair in allPairs[difference]) {
                    quadruplets.push(pair.concat([array[i], array[j]]))
                }
            }
        }
        for (let k = 0; k < i; k++) {
            const currentSum = array[i] + array[k]
            if (!currentSum in allPairs) {
                allPairs[currentSum] = [array[i], array[k]]
            } else {
                allPairs[currentSum].push([array[i], array[k]])
            }
        }
    }
    return quadruplets
}