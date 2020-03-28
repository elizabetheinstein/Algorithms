const ladderLength = (beginWord, endWord, wordList) => {
    let transformations = 1
    let queue = [beginWord]
    let dictionary = new Set(wordList)
    let visited = new Set()
    
    while (queue.length) {
        const neighbors = []
        for (let currentWord of queue) {
            if (currentWord === endWord) {
                return transformations
            }
            let currentWordArr = currentWord.split('')
            for (let i = 0; i < currentWordArr.length; i++) {
                for (let j = 0; j < 26; j++) {
                    currentWordArr[i] = String.fromCharCode(97 + j)
                    const newCurrent = currentWordArr.join('')
                    if (dictionary.has(newCurrent) && !visited.has(newCurrent)) {
                        neighbors.push(newCurrent)
                        visited.add(newCurrent)
                    }
                    currentWordArr[i] = currentWord[i]
                }
            }
        }
        queue = neighbors
        transformations++
    }
    return 0
};