const lastStoneWeight = (stones) => {
    stones = stones.sort((a, b) => a - b);
    
    while(stones.length > 1) {
        const difference = stones.pop() - stones.pop();

        if (difference > 0) {
            let idx = 0;
            while (difference > stones[idx]) {
                idx++;
            }
            stones.splice(idx, 0, difference);
        }
    }
    
    return stones.length ? stones[0] : 0;
}