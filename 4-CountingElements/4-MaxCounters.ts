function solution(N: number, A: number[]): number[] {
    // Implement your solution here
    let counters = Array(N).fill(0);

    let currentMax = 0;
    let finalMax = 0;

    for (let operation of A) {
        if (operation === N + 1) {
            finalMax = currentMax;
            continue;
        }
        if (counters[operation - 1] > finalMax) {
            counters[operation - 1] += 1
        } else {
            counters[operation - 1] = finalMax + 1;
        }
        if (counters[operation - 1] > currentMax) {
            currentMax = counters[operation - 1];
        }
    }

    return counters.map((counter) => Math.max(counter, finalMax));
}