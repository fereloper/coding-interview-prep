class LinkedList {
  constructor(head = null) {
      this.head = head
  }
}

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

  let rightPoint
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

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let head = reversedLinkedList(node1, 2,4);


let list = new LinkedList(head)

console.log(list.head.data);
