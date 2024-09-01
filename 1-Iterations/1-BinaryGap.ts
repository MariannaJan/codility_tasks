function solution(N: number): number {
  // Implement your solution here
  const binary = N.toString(2).split('');

  let indices: number[] = [];

  binary.forEach((n, idx) => {
    if (n === '1') {
      indices.push(idx);
    };
  });
  if (indices.length === 1 || indices.length === binary.length) return 0;

  let gap = 0;
  indices.forEach((i, idx, arr) => {
    if (idx + 1 > indices.length) return gap;
    let newGap = arr[idx + 1] - (i + 1);
    if (newGap > gap) {
      gap = newGap;
    }
  });
  return gap;
}