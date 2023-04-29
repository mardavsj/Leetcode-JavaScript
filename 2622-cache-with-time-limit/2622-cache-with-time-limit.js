
var TimeLimitedCache = function() {
    this.cache = {};
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const isPresentAndValid = this.cache.hasOwnProperty(key) && !this.isExpired(key);

    this.cache[key] = { value, duration: duration + Date.now() };
    return isPresentAndValid;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache[key] && !this.isExpired(key) ? this.cache[key].value : -1;
};

TimeLimitedCache.prototype.count = function() {
     const currentTime = Date.now();
    
    let activeKeys = 0;
    Object.keys(this.cache)
        .forEach((key) => !this.isExpired(key, currentTime) && activeKeys++);
    
    return activeKeys;
};

TimeLimitedCache.prototype.isExpired = function(key, time = Date.now()) {
    return time - this.cache[key].duration >= 0;
}