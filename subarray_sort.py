def subarray_sort(array):
    minUnsorted = float("inf")
    maxUnsorted = float("-inf")

    for i in range(len(array)):
        num = array[i]
        if out_of_order(i, num, array):
            minUnsorted = min(minUnsorted, num)
            maxUnsorted = max(maxUnsorted, num)
    
    if minUnsorted == float("inf"):
        return [-1, -1]
    
    left = 0
    right = len(array) - 1

    while array[left] <= minUnsorted:
        left += 1
    while array[right] >= maxUnsorted:
        right -= 1
    
    return [left, right]

def out_of_order(i, num, array):
    if i == 0:
        return num > array[i + 1]
    if i == len(array) - 1:
        return num < array[i - 1]
    return num > array[i + 1] or num < array[i - 1]