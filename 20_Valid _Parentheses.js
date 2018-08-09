/**LeetCode 20. Valid Parentheses
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */

function isValid(s) {
    if (!s) return true;

    var stack = [];

    var left = ['(', '[', '{'];
    var right = [')', ']', '}'];
    var match = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    for (var i in s) {
        if (left.indexOf(s[i]) > -1) {
            stack.push(s[i]);
        }

        if (right.indexOf(s[i]) > -1) {
            var stackStr = stack.pop();
            if (match[s[i]] != stackStr) {
                return false;
            }
        }
    }

    return stack.length == 0;
}

isValid("{([])}");