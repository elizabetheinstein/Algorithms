class Solution:
    def counting_element(self, arr):
        count = 0
        dict = {}
        for num in arr:
            if num in dict:
                dict[num] += 1
            else:
                dict[num] = 1
        for x in arr:
            if x + 1 in dict:
                count += 1
        return count