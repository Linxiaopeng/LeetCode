// LeetCode 67. Add Binary

// Given two binary strings, return their sum (also a binary string).
// For example, a = "11" b = "1" Return "100".

function addBinary(a, b) {
    var res = "";
    var n1 = a.length;
    var n2 = b.length;
 
    var carry = 0;
    if (n1 < n2) {
        for (var i = 0; i < n2 - n1; ++i) {
            a = "0" + a;
        }
    }
    if (n1 > n2) {
        for (var i = 0; i < n1 - n2; ++i) {
            b = "0" + b;
        }
    }
    for (var i = Math.max(n1, n2) - 1; i >= 0; i--) {
        var sum = Number(a[i]) + Number(b[i]) + carry;
        res = String(sum % 2) + res;
        carry = Math.floor(sum / 2);
    }
    if (carry) {
        res = "1" + res;
    }
    return res;
}

addBinary("1", "101");