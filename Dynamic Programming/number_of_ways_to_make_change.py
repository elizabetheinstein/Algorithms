def number_of_ways_to_make_change(target, denoms):
    ways = [0] * (target + 1)
    ways[0] = 1

    for denom in denoms:
        for amount in range(1, target + 1):
            if (denom <= amount):
                ways[amount] += ways[amount - denom]
    return ways[target]