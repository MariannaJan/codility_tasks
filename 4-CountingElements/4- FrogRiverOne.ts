function solution(X: number, A: number[]): number {
    // Implement your solution here

    const lookup = new Map();
    let counter = X;

    for (let i = 0; i < A.length; i++) {
        if (!lookup.get(A[i])) {
            lookup.set(A[i], true);
            counter -= 1;
        }
        if (counter === 0) return i;
    }
    return -1;
}