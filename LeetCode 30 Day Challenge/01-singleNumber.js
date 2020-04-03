const singleNumber = (nums) => {
    return nums.reduce((prev, current) => prev ^ current, 0)
};