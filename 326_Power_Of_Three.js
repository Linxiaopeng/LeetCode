// LeetCode 326. Power of Three

// Given an integer, write a function to determine if it is a power of three.
// Follow up: Could you do it without using any loop / recursion?

function isPowerOfThree(n) {
    if (n < 3) return false;
    while (n > 2) {
        if (n % 3 !== 0) return false;
        n = parseInt(n / 3);
    }
    return n == 1;
}

isPowerOfThree(9);
