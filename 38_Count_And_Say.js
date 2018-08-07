// LeetCode 38. Count and Say

// The count-and-say sequence is the sequence of integers beginning as follows: 1, 11, 21, 1211, 111221, ...
// 1 is read off as "one 1" or 11. 11 is read off as "two 1s" or 21. 21 is read off as "one 2, then one 1" or 1211. Given an integer n, generate the nth sequence.
// Note: The sequence of integers will be represented as a string.

function countAndSay(n) {
    if (n <= 1) return "1";

    var countSay = '1';

    for (var i = 2; i <= n; i++) {
        var num = countSay.charAt(0); //從開頭開始數
        var temp = countSay;
        var count = 1;

        countSay = ''; // 清空儲存這輪數完的字串


        for (var j = 1; j < temp.length; j++) {
            // 數字相同，count++
            if (temp.charAt(j) == num) {
                count++;
            } else {
                // 數字不同，將目前的count與num加到字串，更新num，新的num從1開始數起
                countSay += count;
                countSay += num;
                num = temp.charAt(j);
                count = 1;
            }
        }
        countSay += count;
        countSay += num;
    }
    return countSay;

};

