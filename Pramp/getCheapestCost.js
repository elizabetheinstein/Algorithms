const getCheapestCost = (rootNode) => {
    const children = rootNode.children.length
    if (!children) {
        return rootNode.cost
    }
    let childCost = rootNode.children.map(child => getCheapestCost(child)) 
    return rootNode.cost + Math.min(childCost)
}

class Node {
    constructor(cost) {
        this.cost = cost
        this.children = []
    }
}
