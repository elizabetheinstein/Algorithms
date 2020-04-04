class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

def merge_linked_list(headOne, headTwo):
    p1 = headOne
    p1Prev = None
    p2 = headTwo
    while p1 and p2:
        if p1.value < p2.value:
            p1Prev = p1
            p1 = p1.next
        else:
            if p1Prev:
                p1Prev.next = p2
            p1Prev = p2
            p2 = p2.next
            p1Prev.next = p1
    if p1 is None:
        p1Prev.next = p2
    return headOne if headOne.value < headTwo.value else headTwo