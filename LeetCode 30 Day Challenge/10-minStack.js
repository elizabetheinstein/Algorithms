class MinStack {
    constructor() {
        this.stack = [];
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack.push({
            val: x,
            min: !this.stack.length ? x : Math.min(x, this.getMin())
        });
    }
    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }
    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val;
    }
    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}




