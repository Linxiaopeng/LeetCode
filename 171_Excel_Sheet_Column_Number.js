// LeetCode 171. Excel Sheet Column Number

// Related to question Excel Sheet Column Title
// Given a column title as appear in an Excel sheet, return its corresponding column number.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28

function titleToNumber(s) {
    var sum = 0;
    var exp = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        var v = s.charCodeAt(i) - 64;
        v = v * Math.pow(26, exp++);
        sum += v;
    }
    return sum;
}

titleToNumber("ABC");
