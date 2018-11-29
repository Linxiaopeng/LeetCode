// LeetCode 165. Compare Version Numbers

// Compare two version numbers version1 and version2. If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.
// You may assume that the version strings are non-empty and contain only digits and the . character. The . character does not represent a decimal point and is used to separate number sequences. For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
// Here is an example of version numbers ordering:
// 0.1 < 1.1 < 1.2 < 13.37

function compareVersion(version1, version2) {
    var array1 = version1.split(".");
    var array2 = version2.split(".");

    var max = array1.length > array2.length ? array1.length : array2.length;

    for (var i = 0; i < max; i++) {
        var i1 = parseInt(array1[i]);
        var i2 = parseInt(array2[i]);

        i1 = array1.length < i + 1 ? 0 : i1;
        i2 = array2.length < i + 1 ? 0 : i2;

        if (i1 > i2) {
            return 1;
        }
        if (i1 < i2) {
            return -1;
        }
    }
    return 0;
}

compareVersion("1.1", "13.37");
