// LeetCode 13. Roman to Integer

// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

function romanToInt(s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        var v1 = map[s[i]];
        var v2 = map[s[i + 1]];
        if (v2 > v1) {
            sum = sum + v2 - v1;
            i++;
        } else {
            sum = sum + v1;
        }
    }
    return sum;
};

romanToInt("XII");