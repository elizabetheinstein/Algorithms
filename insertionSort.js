const insertionSort = (array) => {
    const arrayLen = array.length
    for (let i = 0; i < arrayLen; i++) {
        let j = i
        while (j > 0 && array[j] < array[j - 1]) {
            let temp = array[j]
            array[j] = array[j - 1]
            array[j - 1] = temp
            j--
        }
    }
    return array
}