function solution(A: number[], K: number): number[] {
    // Implement your solution here
    if (!A.length) return [];
    let result = [...A];
    for (let i = 0; i < K; i++) {
        const element = result.pop()
        result.unshift(element);
    }
    return result;
}