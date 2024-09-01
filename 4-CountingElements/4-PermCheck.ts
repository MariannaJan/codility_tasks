function solution(A: number[]): number {
    // Implement your solution here

    const sorted = A.sort((a, b) => a - b);
    if ((sorted[0] !== 1) || (sorted[sorted.length - 1] !== sorted.length)) {
        return 0
    }
    for (let i = 1; i < sorted.length - 1; i++) {
        if (sorted[i] - i !== 1) return 0;
    }
    return 1;
}