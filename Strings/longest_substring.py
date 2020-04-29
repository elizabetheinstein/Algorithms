def longest_substring_without_duplication(string):
    longest = [0, 1]
    start = 0
    dict = {}

    for i, char in enumerate(string):
        if char in dict:
            start = max(start, dict[char] + 1)
        if longest[1] - longest[0] < i + 1 - start:
            longest = [start, i + 1]
        dict[char] = i
    return string[longest[0] : longest[1]]
