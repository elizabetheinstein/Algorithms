from collections import deque

class Solution(object):
    def ladderLength(self, beginWord, endWord, wordList):
        
        def construct_dict(word_list):
            dict = {}
            for word in word_list:
                for i in range(len(word)):
                    pattern = word[:i] + "_" + word[i+1:]
                    dict[pattern] = dict.get(pattern, []) + [word]
            return dict
            
        def bfs_words(begin, end, dict_words):
            queue, visited = deque([(begin, 1)]), set()
            while queue:
                word, depth = queue.popleft()
                if word not in visited:
                    if word == end:
                        return depth
                    visited.add(word)
                    for i in range(len(word)):
                        pattern = word[:i] + "_" + word[i+1:]
                        neigh_words = dict_words.get(pattern, [])
                        for neighbor in neigh_words:
                            if neighbor not in visited:
                                queue.append((neighbor, depth + 1))
            return 0
        
        dict = construct_dict(set(wordList))
        return bfs_words(beginWord, endWord, dict)