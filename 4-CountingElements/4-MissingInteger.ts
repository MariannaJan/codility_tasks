function solution(A: number[]): number {
    // Implement your solution here

    const sorted = Array.from(new Set(A)).filter((n) => n > 0).sort((a, b) => a - b);
    if (!sorted.length) return 1;
    if (sorted[0] > 1) return 1;
    if (sorted[sorted.length - 1] === sorted.length) return sorted.length + 1;

    for (let i = 1; i < sorted.length - 1; i++) {
        if (sorted[i + 1] - sorted[i] > 1) return sorted[i] + 1
    }

}