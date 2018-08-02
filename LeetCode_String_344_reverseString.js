// LeetCode 344. Reverse String

// Write a function that takes a string as input and returns the string reversed.
// Example: Given s = "hello", return "olleh".

function reverseString(str) {
    var j = '';
    for (i = str.length; i > 0; i--) {
        j = j + str.slice(0, i).slice(-1);
    }
    return j;
}

reverseString("JavaScript");