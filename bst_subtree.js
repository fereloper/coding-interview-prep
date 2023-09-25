class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function searchBST(root, val) {
  if (root === null) {
    return null;
  }

  if (val === root.val) {
    return root; 
  } else if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val); // Search in the right subtree
}

// Helper function to convert a subtree to an array (for visualization)
function subtreeToArray(node) {
  if (node === null) {
    return null;
  }
  return [node.val, subtreeToArray(node.left), subtreeToArray(node.right)];
}
