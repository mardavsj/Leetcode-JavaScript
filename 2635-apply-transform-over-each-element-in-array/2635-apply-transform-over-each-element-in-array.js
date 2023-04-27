var map = function(arr, fn) {
    arr.forEach((itm, idx) => {
        arr[idx] = fn(itm, idx);
    })
    return arr;
};