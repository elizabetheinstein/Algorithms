class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def middleNode(self, head):
        first = head
        second = head
        
        while first and first.next:
            second = second.next
            first = first.next.next
            
        return second