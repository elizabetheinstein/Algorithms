const minPathSum = (grid) => {
    if (!grid || !grid.length) return;
    const height = grid.length;
    const width = grid[0].length;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i !== 0 && j !== 0) grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
            else if (i !== 0) grid[i][j] += grid[i - 1][j];
            else if (j !== 0) grid[i][j] += grid[i][j - 1];
        }
    }
    return grid[height - 1][width - 1];
}