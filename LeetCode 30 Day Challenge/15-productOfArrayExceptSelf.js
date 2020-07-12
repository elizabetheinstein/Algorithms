// N is length of nums array
// Time Complexity: O(N)
// Space Complexity: O(1) excluding the output array

const productExceptSelf = (nums) => {
    const output = new Array(nums.length).fill(1)
    let left = 1
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left
        left *= nums[i]
    }
    let right = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right
        right *= nums[i]
    }

    return output
}