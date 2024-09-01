function solution(A: number[]): number {
    // Implement your solution here

    let sum = 0;

    for (let el of A) {
        sum += el;
    };

    let sumRight = sum - A[0];
    let sumLeft = A[0];

    let minDiff = Math.abs(sumRight - sumLeft);

    for (let i = 1; i < A.length - 1; i++) {
        sumLeft += A[i];
        sumRight -= A[i];
        let diff = Math.abs(sumRight - sumLeft);
        minDiff = diff < minDiff ? diff : minDiff;
    }

    return minDiff;
}