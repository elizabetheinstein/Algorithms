const root = (x, n) => {
    if (x === 0) return 0
    let lowerbound = 0
    let upperBound = Math.max(1,x)
    let approxRoot = (upperBound + lowerbound) / 2
    
    while (approxRoot - lowerbound >= 0.001) {
        if (Math.pow(approxRoot, n) > x) {
            upperBound = approxRoot
        } else if (Math.pow(approxRoot, n) < x) {
            lowerbound = approxRoot
        } else break
        approxRoot = (upperBound + lowerbound) / 2
    }
    return approxRoot
}