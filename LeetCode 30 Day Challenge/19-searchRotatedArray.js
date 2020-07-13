// N is length of nums array
// Time complexity: O(log N)
// Space complexity: O(1)

const search = (nums, target) => {
    if (!nums || !nums.length) return -1;

    const length = nums.length;
    let left = 0;
    let right = length - 1;

    while (left <= right) {
        const mid = left + Math.floor(right - left / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1
            else left = mid + 1
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1
            else right = mid - 1
        }
    }
    return -1
}