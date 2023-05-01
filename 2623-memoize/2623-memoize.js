function memoize(fn) {
    let answer = {};
    return function(...args) {
        const argsString = args.join(".");
        const cacheValue = answer[argsString]
        if(cacheValue != undefined) {
            return cacheValue;
        }
        return answer[argsString] = fn(...args);
    }
}