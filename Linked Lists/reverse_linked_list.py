def reverse_linked_list(head):
    first, second = None, head
    while second is not None:
        third = second.next
        second.next = first
        first = second
        second = third
    
    return first