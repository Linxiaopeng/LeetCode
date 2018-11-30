// LeetCode 258. Add Digits

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// For example:
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

function addDigits(num) {
    while (num > 10) {
        var sum = 0;
        ("" + num).split("").forEach(function(v) {
            sum += parseInt(v);
        });
        num = sum;
    }
    return num;
}

// addvance
function addDigits(num) {
    if (num == 0) return 0;
    if (num == 0) return 9;
    return num % 9;
}

addDigits(138);
