// Time Complexity: O(b)
// Space Complexity: O(1)
function multiply(a, b) {
  if (b === 1) {
    return a;
  }

  return a + multiply(a, b - 1);
}
