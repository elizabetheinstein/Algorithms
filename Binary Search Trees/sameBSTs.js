const sameBSTs = (arrayOne, arrayTwo) => {
    if (arrayOne.length !== arrayTwo.length || arrayOne[0] !== arrayTwo[0]) return false
    if (arrayOne.length === 0 && arrayTwo.length === 0) return true

    let arrayOneLeft = getSmaller(arrayOne)
    let arrayTwoLeft = getSmaller(arrayTwo)
    let arrayOneRight = getBiggerOrEqual(arrayOne)
    let arrayTwoRight = getBiggerOrEqual(arrayTwo)

    return (sameBSTs(arrayOneLeft, arrayTwoLeft) && sameBSTs(arrayOneRight, arrayTwoRight))
}

const getSmaller = (array) => {
    let left = []
    for (let i = 1; i < array.length; i++) {
        let currentNode = array[i]
        if (currentNode < array[0]) left.push(currentNode)
    }
    return left
}

const getBiggerOrEqual = (array) => {
    let right = []
    for (let i = 1; i < array.length; i++) {
        let currentNode = array[i]
        if (currentNode >= array[0]) right.push(currentNode)
    }
    return right
}