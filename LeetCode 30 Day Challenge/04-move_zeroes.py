class Solution:
    def moveZeroes(self, nums):
        i = 0
        n = len(nums)
        while i < n:
            if nums[i] == 0:
                nums.pop(i)
                nums.append(0)
                n -= 1
            else:
                i += 1