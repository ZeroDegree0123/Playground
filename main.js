// Recursion
const recursion = (n) => {
    if (n <= 0) {
        console.log("complete")
    } else {
        console.log(n)
        recursion(n - 1)
    }
    return -1
}

// console.log(recursion(10))

// Binary Search 
const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
const binarySearch = (array, target) => {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let guess = Math.floor((min + max) / 2);
        if (array[guess] === target) {
            return guess;

        } else if (array[guess] < target) {
            console.log("hit min")
            min = guess + 1;

        } else {
            console.log("hit max")
            max = guess - 1;
        }
    }
    return -1
}

console.log(binarySearch(primes, 3))