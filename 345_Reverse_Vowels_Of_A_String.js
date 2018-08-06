// LeetCode 345. Reverse Vowels of a String

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1: Given s = "hello", return "holle".
// Example 2: Given s = "leetcode", return "leotcede".
// Note: The vowels does not include the letter "y".

function reverseVowels(s) {
    var vowels = [];

    for (i = 0; i < s.length; i++) {
        if ((/^[aeiou]$/i).test(s[i])) {
            vowels.push(s[i]);
        }
    }

    var v = vowels.length - 1;
    var sAry = s.split("");

    for (var j = 0; j < sAry.length; j++) {
        if ((/^[aeiou]$/i).test(sAry[j])) {
            sAry[j] = vowels[v--];
        }
    }

    return sAry.join("");
}

reverseVowels("hello");