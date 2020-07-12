// first solution
// L is length of string
// N is length of shift array

// Time Complexity O(N * L)
// Space Complexity O(L)

const stringShifts = (str, shift) => {
    for (let [direction, amount] of shift) {
        if (direction === 0) s = s.slice(amount) + s.slice(0, amount)
        else {
            amount = s.length - amount
            s = s.slice(amount) + s.slice(0, amount)
        }
    }
    return s
}

const stringShifts2 = (str, shift) => {
    let left_shifts = 0
    for (let [direction, amount] of shift) {
        if (direction === 1) amount = -amount
        left_shifts += amount
    }

    left_shifts %= s.length
    s = s.slice(left_shifts) + s.slice(0, left_shifts)
    return s
}