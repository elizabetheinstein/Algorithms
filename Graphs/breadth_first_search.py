class Node:
    def __init__(self, name):
        self.name = name
        self.children = []
    
    def add_child(self, name):
        self.children.append(Node(name))
        return self

    def breadth_first_search(self, array):
        queue = [self]
        while len(queue) > 0:
            current = queue.pop(0)
            array.append(current.name)
            for child in current.children:
                queue.append(child)
        return array