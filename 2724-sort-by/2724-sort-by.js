var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};