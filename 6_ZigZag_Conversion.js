// LeetCode 6. ZigZag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR" Write the code that will take a string and make this conversion given a number of rows:
// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

function convert(s, numRows) {
    if (s == null) return "";
    if (numRows == 1) return s;

    // 毎一輪的變化總共是numRows*2 - 2種
    var n = numRows * 2 - 2;
    var array = [];

    // 創立一個有numRows元素的array
    for (var k = 0; k < numRows; k++) {
        array.push("");
    }

    for (var i in s) {
        var lineNumber = i % n;
        if (lineNumber < numRows) {
            // i%n 比 numRows小，s[i]直接放入array
            array[lineNumber] += s[i];
        } else {
            // 計算s[i]應該屬於array哪個位子
            //array[numRows-1 - lineNumber-numRows-1] += s[i];
            array[2 * numRows - lineNumber - 2] += s[i];
        }
    }

    return array.join("");
}

convert("ABCDEFGHIJKLMN", 4);
