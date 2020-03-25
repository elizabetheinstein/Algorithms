class AncestralTree:
    def __init__(self, name):
        self.name = name
        self.ancestor = None

def youngestCommonAncestor(topAncestor, descendantOne, descendantTwo):
    depthOne = getDepth(descendantOne, topAncestor)
    depthTwo = getDepth(descendantTwo, topAncestor)
    if depthOne > depthTwo:
        return backTrack(descendantOne, descendantTwo, depthOne - depthTwo)
    else:
        return backTrack(descendantTwo, descendantOne, depthTwo - depthOne)

def getDepth(descendant, topAncestor):
    depth = 0
    while descendant != topAncestor:
        depth += 1
        descendant = descendant.ancestor
    return depth

def backTrack(lower, higher, difference):
    while difference > 0:
        lower = lower.ancestor
        difference -= 1
    
    while lower != higher:
        lower = lower.ancestor
        higher = higher.ancestor
    return lower