import heapq

class Solution(object):
    def last_stone_weight(self, stones):
        stones = [-val for val in stones]
        heapq.heapify(stones)
        while len(stones) > 1:
            max = heapq.heappop(stones)
            second = heapq.heappop(stones)
            if max != second:
                heapq.heappush(stones, max - second)
        if len(stones) == 0:
            return 0
        return -stones[0]