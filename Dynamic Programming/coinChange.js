const minNumberOfCoinsForChange = (n, coins) => {
    const numOfCoins = new Array(n + 1).fill(Infinity)
    numOfCoins[0] = 0
    
    for (const denom of coins) {
        for (let amount = 0; amount < numOfCoins.length; amount++) {
						if (denom <= amount) {
							  numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1)
						}
        }
    }
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
}