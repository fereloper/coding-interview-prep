// Time complexity: O(N)
// Space Complexity: O(1)
function sum_of_natural_numbers(n) {
  let sum = 0;

  while(n > 0) {
    sum += n;
    n--;
  }
  return sum;
}
