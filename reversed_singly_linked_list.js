// Time Complexity: O(N)
// Space Complexity: O(N)
class Node {
  constructor(data) {
    this.data = data
    this.next = null                
  }
}

function reversedLinkedList(head, left, right) {
  let prevNode = null;
  let nextNode = null;
  
  let headNode = head;
  let leftPointer = 1;
  while(leftPointer < left) {
    headNode = headNode.next;
    leftPointer++;
  }

  let currentNode = headNode;

  while(currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }

  head = prevNode;
  return head;
}
