// LeetCode 125. Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// For example, "A man, a plan, a canal: Panama" is a palindrome. "race a car" is not a palindrome.
// Note: Have you consider that the string might be empty? This is a good question to ask during an interview.
// For the purpose of this problem, we define empty string as valid palindrome.

function isPalindrome(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/gi, "");
    var rev = s
        .split("")
        .reverse()
        .join("");
    return s.indexOf(rev) == 0;
}

isPalindrome("abc, Ba");
