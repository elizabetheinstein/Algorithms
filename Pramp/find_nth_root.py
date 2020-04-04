def find_nth_root(x, n):
    if (x == 0):
        return 0
    lower_bound = 0
    upper_bound = max(1,x)
    root = (upper_bound + lower_bound) / 2
    
    while root - lower_bound >= 0.001:
        if pow(root, n) > x:
            upper_bound = root
        elif pow(root, n) < x:
            lower_bound = root
        else:
            break
        root = (upper_bound + lower_bound) / 2
    return root
