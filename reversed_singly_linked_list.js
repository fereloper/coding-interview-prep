// Time Complexity: O(N)
// Space Complexity: O(N)
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

function reverse(head) {
    let currentNode = head;

    let prevNode = null;

    while (currentNode) {
        let next = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = next;
    }

    return prevNode;
}

function reversedLinkedList(head, left, right) {
    if (left === right) {
        return head;
    }

    let revStart = null;
    let revStartPrevious = null;
    let revEnd = null;
    let revEndNext = null;
    let currentNode = head;

    let pointer = 1;
    while (currentNode && pointer <= right) {
        if (pointer < left)
            revStartPrevious = currentNode;

        if (pointer === left)
            revStart = currentNode;

        if (pointer === right) {
            revEnd = currentNode;
            revEndNext = currentNode.next;
        }

        currentNode = currentNode.next;
        pointer++;
    }

    revEnd.next = null;

    revEnd = reverse(revStart);

    if (revStartPrevious) {
        revStartPrevious.next = revEnd;
    } else {
        head = revEnd;
    }

    revStart.next = revEndNext;
    return head;
}
