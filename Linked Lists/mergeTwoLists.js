class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const mergeTwoLists = (l1, l2) => {
    let current = new ListNode(0)
    let newList = current
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
    current.next = l1 || l2
    return newList.next
}