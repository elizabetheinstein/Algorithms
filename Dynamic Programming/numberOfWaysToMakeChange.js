const numberOfWaysToMakeChange = (n, denoms) => {
	let ways = new Array(n + 1).fill(0)
	ways[0] = 1
	
	for (const denom of denoms) {
        let amount = 1
		while (amount <= n) {
			if (denom <= amount) {
			  ways[amount] += ways [amount - denom]
            }
            amount++
		}
	}
	return ways[n]
}