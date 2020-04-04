function bracketMatch(text) {
    let stack = []
    for (let i = 0; i < text.length; i++) {
      let bracket = text[i]
      if (bracket === "(") {
        stack.push(bracket)
      }
      if (bracket === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop()
        } else {
          stack.push(bracket)
        }
      }
    }
    return stack.length
  }