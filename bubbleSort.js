const bubbleSort = (array) => {
    let sorted = false
    const arrLen = array.length
    while (!sorted) {
        sorted = true
        for (let i = 0; i < arrLen; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i + 1]
                array[i + 1] = array[i]
                array[i] = temp
                sorted = false
            }
        }
    }
    return array
}