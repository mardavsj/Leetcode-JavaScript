var compose = function(functions) {
    return function (punch) { 
        return functions.reduceRight((acc, fn) => fn(acc), punch)
    }
};