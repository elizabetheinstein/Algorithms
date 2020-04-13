def max_subset_sum_no_adjacent(array):
    if not len(array):
        return 0
    if len(array) == 1:
        return array[0]
    
    pointer = array[0]
    sum = max(array[0], array[1])

    for i in range(2, len(array)):
        current = max(sum, pointer + array[i])
        pointer, sum = sum, current
    return sum