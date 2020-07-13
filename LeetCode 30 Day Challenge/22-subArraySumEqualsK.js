const subArraySum = (nums, k) => {
    const sumMap = new Map([[0, 1]])
    let total = 0
    let sum = 0

    for (let num of nums) {
        sum += num
        total += (sumMap.get(sum - k) || 0)
        sumMap.set(sum, (sumMap.get(sum) || 0) + 1)
    }

    return total
}