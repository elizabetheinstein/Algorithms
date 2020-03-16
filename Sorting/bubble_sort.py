def bubble_sort(array):
    sorted = False
    
    while not sorted:
        sorted = True
        for i in range(len(array) - 1):
            if array[i] > array[i + 1]:
                swap(i, i + 1, array)
                sorted = False
    
    return array

def swap(idx1, idx2, array):
    array[idx1], array[idx2] = array[idx2], array[idx1]
