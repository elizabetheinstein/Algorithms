class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

def find_loop(head):
    first = head.next
    second = head.next.next
    while first != second:
        first = first.next
        second = second.next.next
    first = head
    while first != second:
        first = first.next
        second = second.next
    return first