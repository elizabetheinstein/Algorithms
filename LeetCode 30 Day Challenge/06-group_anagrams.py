class Solution:
    def groupAnagrams(self, strs):
        dict = {}
        for str in strs:
            key = tuple(sorted(str))
            dict[key] = dict.get(key, []) + [str]
        return list(dict.values())