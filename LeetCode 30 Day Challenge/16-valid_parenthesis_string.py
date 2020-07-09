class Solution:
    def checkValidString(self, s):
        count_min = count_max = 0

        for char in s:
            count_max = count_max - 1 if char == ')' else count_max + 1
            count_min = count_min + 1 if char == '(' else max(count_min - 1, 0)
            if count_max < 0:
                return False

        return count_min == 0
