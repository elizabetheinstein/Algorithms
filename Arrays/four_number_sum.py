def four_number_sum(array, targetSum):
    allPairs = {}
    quadruplets = []
    for i in range(1, len(array) - 1):
        for j in range(i + 1, len(array)):
            currentSum = array[i] + array[j]
            difference = targetSum - currentSum
            if difference in allPairs:
                for pair in allPairs[difference]:
                    quadruplets.append(pair + [array[i], array[j]])
        for k in range(0, i):
            currentSum = array[i] + array[k]
            if currentSum not in allPairs:
                allPairs[currentSum] = [[array[i], array[k]]]
            else:
                allPairs[currentSum].append([array[i], array[k]])
    return quadruplets