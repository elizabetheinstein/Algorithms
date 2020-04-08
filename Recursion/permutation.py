def get_permutation(array):
    permutations = []
    permutations_helper(array, [], permutations)
    return permutations

def permutations_helper(array, current, permutations):
    if not len(array) and len(current):
        permutations.append(current)
    else:
        for i in range(len(array)):
            newArray = array[:i] + array[i+1:]
            newPermutation = current + [array[i]]
            permutations_helper(newArray, newPermutation, permutations)