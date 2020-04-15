class Solution(object):
    def findMaxLength(self, nums):
        dict = {0: -1}
        count = 0
        max_len = 0
        
        for i in range(len(nums)):
            if nums[i] == 0:
                count -= 1
            else:
                count += 1
            
            if count in dict:
                max_len = max(max_len, i - dict[count])
            else:
                dict[count] = i
        
        return max_len
        