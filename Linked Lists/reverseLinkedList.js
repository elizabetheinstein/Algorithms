const reverseLinkedList = (head) => {
    let first = null
    let second = head

    while (second !== null) {
        let third = second.next
        second.next = first
        first = second
        second = third
    }
    return first
}