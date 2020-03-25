const youngestCommonAncestor = (topAncestor, descendantOne, descendantTwo) => {
    const depthOne = getDepth(descendantOne, topAncestor)
    const depthTwo = getDepth(descendantTwo, topAncestor)
    if (depthOne > depthTwo) {
        return backTrack(descendantOne, descendantTwo, depthOne - depthTwo)
    } else {
        return backTrack(descendantTwo, descendantOne, depthTwo - depthOne)
    }
}

const getDepth = (descendant, topAncestor) => {
    let depth = 0
    while (descendant !== topAncestor) {
        depth++
        descendant = descendant.ancestor
    }
    return depth
}

const backTrack = (lower, higher, difference) => {
    while (difference > 0) {
        lower = lower.ancestor
        difference--
    }
    while (lower !== higher) {
        lower = lower.ancestor
        higher = higher.ancestor
    }
    return lower
}