const quickSort = (array) => {
    quickSortHelper(array, 0, array.length - 1)
}

const quickSortHelper = (array, start, end) => {
    const pivot = start
    const left = start + 1
    const right = end

    while (right >= left) {
        if (array[left] > array[pivot] && array[right] < array[pivot]) {
            swap(array, left, right)
        }
        if (array[left] <= array[pivot]) {
            left++
        }
        if (array[right] >= array[pivot]) {
            right--
        }
    }
    swap(array, pivot, right)
    const smallerSubArray = 
}

const swap = (array, start, end) => {
    let temp = array[start]
    array[start] = array[end]
    array[end] = array[start]
}