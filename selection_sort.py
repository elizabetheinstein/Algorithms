def selection_sort(array):
    start = 0
    while start < len(array) - 1:
        lowest = start
        for i in range(start + 1, len(array)):
            if array[lowest] > array[i]:
                lowest = i
        swap(array, start, lowest)
        start += 1
    return array

def swap(array, idx1, idx2):
    array[idx1], array[idx2] = array[idx2], array[idx1]    
