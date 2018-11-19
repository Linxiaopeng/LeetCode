// LeetCode 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

function longestCommonPrefix(s) {
    if (s == null || s.length == 0) return "";

    var same = s[0];
    for (var i = 1; i < s.length; i++) {
        var str = s[i];

        for (var j = 0; j < same.length; j++) {
            if (same[j] != str.charAt(j)) {
                break;
            }
        }

        same = same.slice(0, j);
    }
    return same;
}

longestCommonPrefix(["abcd", "abccc", "abdec"]);