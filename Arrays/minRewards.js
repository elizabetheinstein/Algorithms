const minRewards = (scores) => {
    const rewardsArr = scores.map(_ => 1)
    for (let i = 1; i < rewardsArr.length; i++) {
        if (scores[i] > scores[i - 1]) {
            rewardsArr[i] = rewardsArr[i - 1] + 1
        }
    }
    for (let i = scores.length - 2; i >= 0; i--) {
        if (scores[i] > scores[i + 1]) {
            rewardsArr[i] = Math.max(rewardsArr[i], rewardsArr[i + 1] + 1)
        }
    }
    return rewardsArr.reduce((a, b) => a + b)
}