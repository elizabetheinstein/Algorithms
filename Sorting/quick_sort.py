def quick_sort(array):
    quick_sort_helper(array, 0, len(array) - 1)
    return array

def quick_sort_helper(array, start, end):
    pivot = start
    left = start + 1
    right = end

    while right >= left:
        if array[left] > array[pivot] and array[right] < array[pivot]:
            swap(array, left, right)
        if array[left] <= array[pivot]:
            left += 1
        if array[right] >= array[pivot]:
            right -= 1
    swap(array, pivot, right)

    smaller_left_array = right - 1 - start < end - (right + 1)
    if smaller_left_array:
        quick_sort_helper(array, start, right - 1)
        quick_sort_helper(array, right + 1, end)
    else:
        quick_sort_helper(array, right + 1, end)
        quick_sort_helper(array, start, right - 1)

def swap(array, idx1, idx2):
    array[idx1], array[idx2] = array[idx2], array[idx1]