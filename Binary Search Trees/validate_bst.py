class BST:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None

def validate_bst(tree):
    return validate_bst_helper(tree, float("-inf"), float("inf"))

def validate_bst_helper(tree, minValue, maxValue):
    if tree is None:
        return True
    if tree.value < minValue or tree.value >= maxValue:
        return False
    
    is_left_valid = validate_bst_helper(tree.left, minValue, tree.value)
    return is_left_valid and validate_bst_helper(tree.right, tree.value, maxValue)