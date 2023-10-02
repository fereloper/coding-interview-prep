// Time Complexity: O(N * log(N))
// Space Complexity: O(1)
function maxDisjointIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 1; 
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const currentStart = intervals[i][0];
    const currentEnd = intervals[i][1];

    
    if (currentStart > prevEnd) {
      count++;
      prevEnd = currentEnd;
    }
  }

  return count;
}
