function solution(A: number[]): number {
    const arr = [...A].sort((a, b) => a - b);
    if (arr[1] - arr[0] !== 0) return arr[0];
    for (let i = 0; i < arr.length; i += 2) {
        if ((i + 1) > arr.length - 1) return arr[i];
        if (arr[i + 1] - arr[i] !== 0) return arr[i];
    }
}

[2, 2, 3, 3, 4]