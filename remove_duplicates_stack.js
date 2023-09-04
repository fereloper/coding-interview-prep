// Time Complexity: O(N)
// Space Complexity: O(N)

function removeDuplicate(s) {
  let stack = new Stack();
  for(let letter of s) {
    if (stack.top() === letter) {
      stack.pop();
    } else {
      stack.push(letter);
    }
  }

  return stack.toString();
}

class Stack {
  constructor() {
    this.bags = [];
    this.iterator = -1;
  }

  push(l) {
    this.iterator++;
    this.bags[this.iterator] = l;
  }

  pop() {
    if (this.iterator === -1) {
      return false;
    }

    this.iterator--;
  }

  top() {
    if (this.iterator === -1) {
      return false;
    }
  
    return this.bags[this.iterator];
  }

  toString() {
    let s = '';
    for (let i = 0; i <= this.iterator; i++) {
      s += this.bags[i];
    }
    return s;
  }

}
