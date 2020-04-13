class Solution(object):
    def backspaceCompare(self, S, T):
        return self.helper(S) == self.helper(T)
    
    def helper(self, str):
        result = []
        for char in str:
            if char != '#':
                result.append(char)
            elif result:
                result.pop()
        return ''.join(result)