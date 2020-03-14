const subArraySort = (array) => {
    let minUnsorted = Infinity
    let maxUnsorted = -Infinity
    for (let i = 0; i < array.length - 1; i++) {
        if (i === 0 && array[i] > array[i + 1] ||
            i === array.length - 1 && array[i] < array[i - 1] ||
            array[i] > array[i + 1]) {
                minUnsorted = Math.min(minUnsorted, array[i + 1])
                maxUnsorted = Math.max(maxUnsorted, array[i])
            }
    }
    if (minUnsorted === Infinity) {
        return [-1, -1]
    }
    let left = 0
    let right = array.length - 1

    while (array[left] <= minUnsorted) {
        left++
    }
    while (array[right] >= maxUnsorted) {
        right --
    }
    return [left, right]
}