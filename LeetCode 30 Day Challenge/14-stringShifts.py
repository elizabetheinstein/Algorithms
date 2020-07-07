from typing import List

# first solution
# L is length of string
# N is length of shift array

# Time Complexity O(N * L)
# Space Complexity O(L)


class Solution:
    def stringShift(self, s: str, shift: List[List[int]]) -> str:
        for direction, amount in shift:
            amount % len(s)
            if direction == 0:
                s = s[amount:] + s[:amount]
            else:
                s = s[-amount:] + s[:-amount]
        return s

# second solution
# Time Complexity O(N + L)
# Space Complexity O(L)


class Solution2:
    def stringShift(self, s: str, shift: List[List[int]]) -> str:

        # Count the number of left shifts. A right shift is a negative left shift.
        left_shifts = 0
        for direction, amount in shift:
            if direction == 1:
                amount = -amount
            left_shifts += amount

        # Convert back to a positive, do left shifts, and return.
        left_shifts %= len(s)
        s = s[left_shifts:] + s[:left_shifts]
        return s
