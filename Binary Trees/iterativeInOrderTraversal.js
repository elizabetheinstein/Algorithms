const iterativeInOrderTraversal = (tree, callback) => {
    if (!tree) return
      let current = tree
      let prev = null
      let next = null
      
      //traverse down the tree
      while (current !== null) {
          if (prev === null || prev === current.parent) {
              if (current.left !== null) {
                  next = current.left
              } else {
                  callback(current)
                  next = current.right !== null ? current.right : current.parent
              }
          } else if (prev === current.left) {
              callback(current)
              next = current.right !== null ? current.right : current.parent
          } else {
            next = current.parent
          }
          prev = current 
        current = next
      }
  }