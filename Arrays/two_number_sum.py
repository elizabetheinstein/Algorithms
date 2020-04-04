def twoNumberSum(array, targetSum):
    map = {}
    numLen = len(array)
    for i in range(numLen):
        complement = targetSum - array[i]
        if complement in map:
            return [complement, array[i]]
        map[array[i]] = i
    return []

def twoNumberSum2(nums, target):
    dict = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in dict:
            return [dict[complement], i]
        else:
            dict[num] = i