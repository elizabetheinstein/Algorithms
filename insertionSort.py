def insertionSort(array): 
    for i in range(1, len(array)):
        j = i
        while j > 0 & array[j] < array[j - 1]:
            swap(j, j - 1, array)
            j -= 1
    return array

def swap(idx1, idx2, array):
    array[idx1], array[idx2] = array[idx2], array[idx1]