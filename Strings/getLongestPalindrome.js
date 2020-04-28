const longestPalindromicSubstring = (string) => {
    let currentLongest = [0, 1]
    for (let i = 1; i < string.length; i++) {
        const odd = getLongestPalindrome(string, i - 1, i + 1)
        const even = getLongestPalindrome(string, i - 1, i)
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest
    }
    return string.slice(currentLongest[0], currentLongest[1])
}

const getLongestPalindrome = (string, left, right) => {
    while (left >= 0 && right < string.length) {
        if (string[left] !== string[right]) break
        left--
        right++
    }
    return [left + 1, right]
}