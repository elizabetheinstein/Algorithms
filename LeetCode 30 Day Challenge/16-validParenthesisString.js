const checkValidString = (s) => {
    let countMin = 0
    let countMax = 0

    for (let char of s) {
        countMax = char == ')' ? countMax - 1 : countMax + 1
        countMin = char == '(' ? countMin + 1 : Math.max(countMin - 1, 0)
        if (countMax < 0) return false
    }

    return countMin === 0
}