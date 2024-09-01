function solution(X: number, Y: number, D: number): number {
    // Implement your solution here
    const distance = Y - X;
    if (distance === 0) return 0;
    if (distance <= D) return 1;
    const jumps = Math.ceil(distance / D);
    return jumps;
}

(1, 1, 3)