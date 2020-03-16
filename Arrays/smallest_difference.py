def smallest_difference(array1, array2):
    array1.sort()
    array2.sort()
    one = 0
    two = 0
    smallest = float('inf')
    current = float('inf')
    smallest_pair = []
    while one < len(array1) and two < len(array2):
        first = array1[one]
        second = array2[two]
        if first < second:
            current = second - first
            one += 1
        elif first > second:
            current = first - second
            two += 1
        else:
            return [first, second]
        if smallest > current:
            smallest = current
            smallest_pair = [first, second]
    return smallest_pair
