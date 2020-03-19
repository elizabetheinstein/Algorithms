def same_BSTs(array_one, array_two):
    if len(array_one) != len(array_two):
        return False
    if len(array_one) == 0 and len(array_two) == 0:
        return True
    if array_one[0] != array_two[0]:
        return False
    
    array_one_left = get_smaller(array_one)
    array_two_left = get_smaller(array_two)
    array_one_right = get_bigger_or_equal(array_one)
    array_two_right = get_bigger_or_equal(array_two)

    return same_BSTs(array_one_left, array_two_left) and same_BSTs(array_one_right, array_two_right)

def get_smaller(array):
    left = []
    for i in range(1, len(array)):
        current_node = array[i]
        if current_node < array[0]:
            left.append(current_node)
    return left

def get_bigger_or_equal(array):
    right = []
    for i in range(1, len(array)):
        current_node = array[i]
        if current_node >= array[0]:
            right.append(current_node)
    return right