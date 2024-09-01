
function solution(A: number[]): number {
    // Implement your solution here

    const sorted = [...A].sort((a, b) => a - b);
    if (sorted[0] !== 1) return 1;
    const end = sorted.length - 1;
    if (sorted[end] !== sorted.length + 1) return sorted.length + 1;
    for (let idx = 0; idx < end; idx++) {
        if ((sorted[idx + 1] - sorted[idx]) > 1) return sorted[idx] + 1;
    }
}