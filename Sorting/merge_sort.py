def merge_sort(array):
    if (len(array) < 2):
        return array
    
    halfway = len(array) // 2

    left = array[:halfway]
    right = array[halfway:]

    return merge_sort_helper(merge_sort(left), merge_sort(right))

def merge_sort_helper(left, right):
    left_len = len(left)
    right_len = len(right)

    l = r = s = 0

    sorted_arr = [None] * (left_len + right_len)

    while l < left_len and r < right_len:
        if left[l] <= right[r]:
            sorted_arr[s] = left[l]
            l += 1
        else:
            sorted_arr[s] = right[r]
            r += 1
        s += 1
    
    while l < left_len:
        sorted_arr[s] = left[l]
        l += 1
        s += 1
    while r < right_len:
        sorted_arr[s] = right[r]
        r += 1
        s += 1
    return sorted_arr