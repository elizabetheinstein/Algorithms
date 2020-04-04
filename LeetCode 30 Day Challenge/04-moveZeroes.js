const moveZeroes = (nums) => {
    let first = 0
    let second = 0
    let numsLen = nums.length
    
    while (second < numsLen) {
        if (nums[first] === 0 && nums[second] !== 0) {
            [nums[first], nums[second]] = [nums[second], nums[first]]
        }
        if (nums[first] !== 0) {
            first++
        }
        second++
    }
}