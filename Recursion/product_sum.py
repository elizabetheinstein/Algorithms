def product_sum(array, multiplier = 1):
    sum = 0
    for element in array:
        if type(element) is list:
            sum += product_sum(element, multiplier + 1)
        else:
            sum += element
    return sum * multiplier