function solution(A: number, B: number, K: number): number {
    // Implement your solution here

    let start = null;

    for (let element = A; element <= B; element++) {
        if (element % K === 0) {
            start = element;
            break;
        }
    }

    if (start === null) {
        return 0;
    }

    return Math.floor((B - start) / K) + 1;
}

[0, 2000000000, 1]

[1, 1, 11]

[11, 14, 2] // (got 0 expected 2).