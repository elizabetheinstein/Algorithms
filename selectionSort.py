def selectionSort(array):
    startIdx = 0
    while startIdx < len(array) - 1:
        lowest = startIdx
        for i in range(startIdx + 1, len(array)):
            if array[lowest] > array[i]:
                lowest = i
        swap(array, startIdx, lowest)
        startIdx += 1
    return array

def swap(array, idx1, idx2):
    array[idx1], array[idx2] = array[idx2], array[idx1]    
