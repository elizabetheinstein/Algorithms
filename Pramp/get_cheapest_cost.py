def get_cheapest_cost(root_node):
    children = len(root_node.children)
    if children == 0:
        return root_node.cost
    child_cost = list(map(lambda child: get_cheapest_cost(child), root_node.children)
    return root_node.cost + min(child_cost)
    
class Node:
    def __init__(self, cost):
        self.cost = cost
        self.children = []
        self.parent = None