# brute force solution
def interweaving_strings(one, two, three):
    if len(one) + len(two) != len(three):
        return False
    return interweave_helper(one, two, three, 0, 0)

def interweave_helper(one, two, three, idx1, idx2):
    idx3 = idx1 + idx2
    if idx3 == len(three):
        return True
    if idx1 < len(one) and one[idx1] == three[idx3]:
        if interweave_helper(one, two, three, idx1 + 1, idx2):
            return True
    if idx2 < len(two) and two[idx2] == three[idx3]:
        return interweave_helper(one, two, three, idx1, idx2 + 1)
    return False

# memoize solution
def interweave_strings1(one, two, three):
    if len(one) + len(two) != len(three):
        return False
    cache = [[None for j in range(len(two) + 1)] for i in range(len(one) + 1)]
    return interweave_helper1(one, two, three, 0, 0, cache)

def interweave_helper1(one, two, three, idx1, idx2, cache):
    if cache[idx1][idx2] is not None:
        return cache[idx1][idx2]
    idx3 = idx1 + idx2
    if idx3 == len(three):
        return True
    if idx1 < len(one) and one[idx1] == three[idx3]:
        cache[idx1][idx2] = interweave_helper1(one, two, three, idx1 + 1, idx2, cache)
        if cache[idx1][idx2]:
            return True
    if idx2 < len(two) and two[idx2] == three[idx3]:
        cache[idx1][idx2] = interweave_helper1(one, two, three, idx1, idx2 + 1, cache)
        return cache[idx1][idx2]
    cache[idx1][idx2] = False
    return False