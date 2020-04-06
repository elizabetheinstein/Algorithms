const getPermutations = (array) => {
    const permutations = []
      permutationsHelper(array, [], permutations)
      return permutations
  }
  
  const permutationsHelper = (array, current, permutations) => {
      if (!array.length && current.length) {
          permutations.push(current)
      } else {
          for (let i = 0; i < array.length; i++) {
              const newArray = array.slice(0, i).concat(array.slice(i + 1))
              const newPermutation = current.concat([array[i]])
              permutationsHelper(newArray, newPermutation, permutations)
          }
      }
  }
  