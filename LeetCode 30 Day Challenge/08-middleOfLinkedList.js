function ListNode(val) {
    this.val = val;
    this.next = null;
}

var middleNode = function(head) {
    let first = head
    let second = head
   
    while (first && first.next) {
        second = second.next
        first = first.next.next
    }
    return second
};