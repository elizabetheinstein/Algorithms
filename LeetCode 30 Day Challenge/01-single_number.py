from functools import reduce

class Solution:
    def singleNumber(self, nums):
        return reduce(lambda x, y: x ^ y, nums, 0)