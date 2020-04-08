def powerset(array, idx = None):
    if idx is None:
        idx = len(array) - 1
    if idx < 0:
        return [[]]
    
    element = array[idx]
    subsets = powerset(array, idx - 1)
    length = len(subsets)

    for i in range(length):
        current = subsets[i]
        subsets.append(current + [element])

    return subsets