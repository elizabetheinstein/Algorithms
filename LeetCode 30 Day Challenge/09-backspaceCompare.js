//O(n) Time O(n) Space
var backspaceCompare = function(S, T) {
    return helper(S) === helper(T)
};

const helper = (str) => {
    let result = []
    for (const current of str) {   
        if (current !== '#') {
            result.push(current)
        } else {
            result.pop()
        }
    }
    return result.join('')

}

//O(n) Time O(1) space
