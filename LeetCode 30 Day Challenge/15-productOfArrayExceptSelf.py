# N is length of nums array
# Time Complexity: O(N)
# Space Complexity: O(1) excluding the output array

class Solution:
    def productExceptSelf(self, nums):
        output = [1] * len(nums)
        left = 1
        right = 1
        for i in range(len(nums)):
            output[i] *= left
            output[-1-i] *= right
            left *= nums[i]
            right *= nums[-1-i]
        return output
