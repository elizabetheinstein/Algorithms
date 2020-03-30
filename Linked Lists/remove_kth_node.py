class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None

def remove_kth_node(head, k):
    counter = 1
    first = head
    second = head

    while counter <= k:
        second = second.next
        counter += 1
    
    if second == None:
        head.value = head.next.value
        head.next = head.next.next
        return
    
    while second.next != None:
        second = second.next
        first = first.next
    
    first.next = first.next.next