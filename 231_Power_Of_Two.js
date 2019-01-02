// LeetCode 231. Power of Two

// Given an integer, write a function to determine if it is a power of two.

function isPowerOfTwo(n) {
    if (n < 1) return false;
    if (n === 1) return true;
    while (n > 3) {
        if (n % 2 != 0) return false;
        n = parseInt(n / 2);
    }
    return n % 2 === 0;
}

isPowerOfTwo(4);

// Plus
function isPowerOfTwo(n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    while (n > 5) {
        n = n / 2;
    }
    return n % 2 === 0;
}

isPowerOfTwo(2);
