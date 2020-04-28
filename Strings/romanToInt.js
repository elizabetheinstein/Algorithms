const romanToInt = (string) => {
    let result = 0
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (let i = 0; i < string.length - 1; i++) {
        let current = string[i]
        let next = string[i + 1]
        if (romanNumerals[current] < romanNumerals[next]) {
            result -= romanNumerals[current]
        } else{
            result += romanNumerals[current]
        }
    }
    return result + romanNumerals[string[string.length - 1]]
}