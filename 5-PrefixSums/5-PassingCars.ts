function solution(A: number[]): number {
    // Implement your solution here

    let zeros = 0;
    let cars = 0;
    for (let car of A) {
        if (car === 0) {
            zeros += 1;
        } else {
            if (cars > 1000000000) return -1;
            cars += zeros
        }
    }
    return cars;

}