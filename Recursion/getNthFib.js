//recursive solution
const getNthFib = (n, memoize = {1: 0, 2: 1}) => {
    if (n in memoize) {
        return memoize[n]
    } else {
        memoize[n] = getNthFib(n - 1) + getNthFib(n - 2)
        return memoize[n]
    }
}

//iterative solution
const getNthFib1 = (n) => {
    let lastTwo = [0, 1]
    let counter = 3
    while (counter <= n) {
        let nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter++
    }
    return n > 1 ? lastTwo[1] : lastTwo[0]
}