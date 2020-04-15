def coin_change(amount, coins):
	num_of_coins = [float("inf")] * (amount + 1)
	num_of_coins[0] = 0
	
	for denom in coins:
		for i in range(len(num_of_coins)):
			if denom <= i:
				num_of_coins[i] = min(num_of_coins[i], num_of_coins[i - denom] + 1)
	return num_of_coins[amount] if num_of_coins[amount] != float("inf") else -1
