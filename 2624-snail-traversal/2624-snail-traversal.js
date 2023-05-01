Array.prototype.snail = function (rows, cols) {
    if (rows * cols !== this.length) return [];
    
    let res = [], counter = 0;
    for (let i = 0; i < rows; i++) {
        res.push([]);
    }
    for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
            res[j % 2 === 0 ? i : rows - i - 1][j] = this[counter++];
        }
    }
    return res;
}