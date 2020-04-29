const longestSubstringWithoutDuplication = (string) => {
    let longestStr = [0, 1];
    let start = 0;
    let dict = {};

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char in dict) {
            start = Math.max(start, dict[char] + 1);
        }
        if (longestStr[1] - longestStr[0] < i + 1 - start) {
            longestStr = [start, i + 1];
        }
        dict[char] = i;
    }
    return string.slice(longestStr[0], longestStr[1]);
}