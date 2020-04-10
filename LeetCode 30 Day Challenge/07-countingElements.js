const countElements = (arr) => {
    let count = 0
    let map = {}
    for (const num of arr) {
        if (!map[num]) {
            map[num] = 1
        } else {
            map[num]++
        }
    }
    for (const element of arr) {
        if (map[element + 1]) {
            count++
        }
    }
    return count
}