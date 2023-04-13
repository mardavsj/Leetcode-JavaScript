var createCounter = function(m) {
    let counter = m;
    return function() {
        counter++;
        return counter - 1;
    };
};