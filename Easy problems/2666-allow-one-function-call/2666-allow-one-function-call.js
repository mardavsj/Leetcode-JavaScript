var once = function(fn) {
    let called = false;
    return function(...args){
        if (!called) {
            called = true;
            return fn(...args);
        }
        
    }
};