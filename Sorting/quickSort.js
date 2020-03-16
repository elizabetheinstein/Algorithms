const quickSort = (array) => {
    quickSortHelper(array, 0, array.length - 1)
    return array
}

const quickSortHelper = (array, start, end) => {
    const pivot = start
    let left = start + 1
    let right = end

    if (start >= end) {
        return
    }

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
    const smallerLeftArray = right - 1 - start < end - (right + 1)
    if (smallerLeftArray) {
        quickSortHelper(array, start, right - 1)
        quickSortHelper(array, right + 1, end)
    } else {
        quickSortHelper(array, right + 1, end)
        quickSortHelper(array, start, right - 1)
    }
}

const swap = (array, start, end) => {
    let temp = array[start]
    array[start] = array[end]
    array[end] = temp
}