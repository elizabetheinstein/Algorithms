const isHappy = (n) => {
    let seen = new Set()
    const happyHelper = (n) => {
        if (n === 1) return true
        let arr = Array.from(String(n), Number)
        let next = 0
        arr.forEach(num => next += num * num)
        if (seen.has(next)) return false
        seen.add(next)
        return happyHelper(next)
    }
    return happyHelper(n)
};